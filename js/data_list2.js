
Vue.component('station-table',{
    template:'#station-template',
    props:{
        columns:Array,
        columName:Array,
        stationData:Array,
        filterStation:String,
        labelData:Array
    },
    data(){
        let sortOrders = {};
        console.log(this.columns)
        this.columns.forEach((key) =>{
            sortOrders[key] = 1
        })
        return{
            sortKey: '',
            sortOrders: sortOrders,
            sortStatus:false,
            hasData:true,
            noData:false,
        }
    },
    methods:{
        //表格排序
        sortStation:function(key,index){
            /*排序的key*/
            this.sortKey = key
            console.log(this.sortKey )
                /*判断默认进来是否排序（不排）*/
            this.sortStatus = true
                /*让当前的排序显示箭头,其他的隐藏*/
            for(let i in this.labelData){
                this.labelData[i].sort = 1
            }
            this.labelData[index].sort = 0
            this.sortOrders[key] = this.sortOrders[key] * -1
            this.sortOrders[key] ===-1 ? this.sortKey = key : this.sortKey =''
        },
        //显示和隐藏表头tip
        showOrHideTip(index,type){
            for(let i in this.labelData){
                this.labelData[i].tip = 0
            }
            $('[data-toggle="tooltip"]').tooltip();
            if(type ===0)
                this.labelData[index].tip = 1
        },
        //显示换热站对比的图表
        stationCompareChart(tagId){
            console.log(tagId)
            layer.open({
                type: 2,
                title: '速热站对比',
                skin: 'layui-layer-lan',
                closeBtn: 1,
                shade: 0.5,
                move:false,
                shadeClose:true ,
                area: ['80%', '75%'],
                content: '/list/stationCompare?tag_id='+tagId, //iframe的url
                cancel:function () {}
            });
        },
        //显示隐藏表中的图标
        showOrHidetdTip(event,type){
            $('[data-toggle="tooltip"]').tooltip();
            if(type ===1){
                $(event.target).find('i').addClass('hidden')

            }else{
                if($(event.target).find('em').html()>=0)
                    $(event.target).find('i').removeClass('hidden')
            }
        },
        //点击表中图标出现图表
        stationTagChart(stationName,stationId,index){
            layer.open({
                type: 2,
                title: '数据图表',
                closeBtn: 1,
                shadeClose: true,
                skin: 'layui-layer-lan',
                shade: 0.5,
                area: ['80%', '75%'],
                content: "/list/chart?station_name="+encodeURIComponent(stationName)+"&station_id="+stationId+"&num="+index+"&tagLevel=2" ,//iframe的url
                cancel:function () {
                    layer.closeAll()
                }
            });
        }
    },
    computed: {
        filterStationData: function () {
            let data = this.stationData;
            if (this.filterStation) {
                /*创建一个新数组，其包含函数选择出的元素*/
                data = data.filter((row) => {
                    return Object.keys(row).some((key) =>{
                        return String(row[key]).indexOf(this.filterStation) > -1
                    })
                });
                if(!data.length){
                    this.noData = true
                    this.hasData = false
                }else{
                    this.noData = false
                    this.hasData = true
                }
            }
            let sortKey = this.sortKey;
            if (sortKey) {
                /*指定这次排序(降序还是升序)*/
                let order = this.sortOrders[sortKey];
                /**
                 * 若返回值为负，则表示 A 在排序后的序列中出现在 B 之前。
                 * 若返回值为 0，则表示 A 和 B 具有相同的排序顺序。
                 * 若返回值为正，则表示 A 在排序后的序列中出现在 B 之后。
                 * */
                /*data = data.sort(function (a,b){

                 let value1=a[sortKey];
                 let value2 = b[sortKey]
                 return (value1===value2 ? 0:value1>value2 ?1:-1)*order
                 })*/
                data = data.sort((a,b) =>{
                    let value1=a.data[sortKey];
                    let value2 = b.data[sortKey]
                    console.log(value1===value2)
                    return (value1===value2 ? 0:value1>value2 ?1:-1)*order
                })
            }else{
                if(this.sortStatus) data = data.reverse()
            }
            return data;
        }
    },

})

const listVue = new Vue({
    el:'#dataList',
    data(){
        return {
            accessToken:'5a69813d21d5dc0007cf98ba',
            companyId:'5a56d68009a1d400078e9b13',
            companyCode:'000044',
            sortKey: '',
            sortOrders: {},
            tagData:[],
            filterStation: '',
            gridColumns:[],
            gridName:[],
            stationData:[],
            sortStatus:false,
            hasData:true,
            noData:false,
        }

    },
    methods:{
        //获取标签数据
        async labelInfo(){
            layer.msg('正在努力的加载数据中，请耐心等待', {
                icon: 16,
                shade: 0.2,
                time: -1
            });
            this.gridColumns= []
            this.gridName =[]
           /* axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';*/
            const lableData = await  axios.get(globalurl +'/v1_0_0/dataTags',{
                params: {
                    access_token: this.accessToken,
                }
            })
            layer.closeAll()
            lableData.data.forEach((list, index, arr) =>{
                list.sort = 1
                list.tip = 0
                this.gridName.push(list.tag_name)
                this.gridColumns.push('tag'+list.tag_id)
            });
            this.tagData =  lableData.data
            console.log(this.tagData)
            $('[data-toggle="tooltip"]').tooltip()
        },
        //获取table数据信息
        async getStationData(){
            const stationListData = await  axios.get(globalurl +'/v1_0_0/stationCurrentData',{
                params: {
                    access_token: this.accessToken,
                    company_code: this.companyCode,
                    name: '{"station_name":"' +this.filterStation + '"}'
                }
            })
            this.stationData = stationListData.data

        },
    },
    created(){
        this.labelInfo()
        this.getStationData()
    },
})


