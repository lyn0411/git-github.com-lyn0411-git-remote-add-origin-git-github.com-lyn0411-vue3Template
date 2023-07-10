/**
 * 总分类
 * Menu 路由
 */
declare namespace Aggregate{
    interface Menus{
        title:string,
        url?:string,
        icon?:string,
        children?:Array<Menus>,
        meta?:object,
        searchId?:number,
        id:string
    }
    /**
     * @params searchName 检索属性名
     * @params searchValue  检索内容
     * @params searchRelation  检索关系 0：or；1：and；
     * @params searchType  检索类型 0 ：模糊查询；1：精确查询
     * @params searchPhrase  短语检索 0：分词检索；1：短语检索不分词
     * @params sortName  需要排序的字段名
     * @params sortValue  需要排序的字段值 “asc”：升序；“desc”：降序
     * 
     */
    interface EsParams{
        searchName:string,
        searchValue:string | number,
        searchRelation:string | number,
        searchType:string | number,
        searchPhrase?:string | number,
        sortName?:string,
        sortValue?:string,
        guid?:string
    }
    /**
     * @params typeId 所属馆id，0：查询所有
     * @params index1 索引名称1，测试使用“book”，正式使用“ancientbook”
     * @params index2 索引名称2
     * @params esParams 检索条件集合
     * @params userId	读者帐号id
     * @params page 页码，默认1
     * @params limit 每页条数，默认20
     */
    interface SearchCrite{
        typeId:string | number;
        index1?:string;
        index2?:string;
        esParams?:Array<EsParams>;
        userId?:string | number;
        limit?: number | string ;
        page?: number | string;
    }
    interface Params{
        bookId? : number | string
        userId? : number | string
        userName? : number | string
        typeId? : number | string
        bookName? : string
    }
    interface Res{
        code?:string
        data?:Array<ResData>
        message?:string
    }
    interface ResData{
        name?:string
        caption?:string
        dicType?:string
        englishName:string
    }
    /**
     * @param bookName 资源名称
     * @param person 责任者
     * @param year 年代
     * @param edition 版本
     * @param classify 分类
     * @param callNumber 索书号
     * @param type 文献类型
     * @param copies 册数
     * @param addres 馆藏地址
     */
    interface BookDetail {
        bookName:string,
        person:string,
        year:string,
        edition:string,
        classify:string,
        callNumber:string,
        type:string,
        copies:string,
        addres:string,
        coverPicture:string,
        briefContent:string,
        [key:string]:string
    }
    interface Message {
        title? : string ,
        message? : string , 
        config?: object
    }
    /**
     * @param(string | undefined) hallType 展会类型
     * @param(string | undefined) address 展会地址
     */
    interface HallPrams extends SearchCrite {
        hallType?:string,
        address?:string,
        id?:string | number
    }
}

declare namespace Newsgate{
    interface Tos {
        yeaer:string | number,
        month:string | number, 
        day:string | number
    }
    interface NewsData{
        TimeItem: Tos;
        id: number;
        title: string;
        operator: number;
        operatorName: string;
        content: string;
        information: string;
        remarks?: any;
        status: number;
        banner: string;
        typeId: number;
        fileName?: any;
        top: number;
        createTime: number;
        updateTime: number;
    }
}
declare namespace Reader{
    interface readerNav {
        title: string;
        icon: string;
        iconActive: string;
        url: string;
    }
    interface UserInfo{
        id?: number;
        userName?: string;
        otherName?: string;
        password?: string;
        userType?: number;
        authority?: number;
        createTime?: number;
        updateTime?: number;
        gender?: any;
        ethnic?: any;
        nickname?: string;
        realstatus?: any;
        realName?: any;
        identityDocument?: any;
        typeId?: number;
        status?: number;
        states?: number;
    }
    interface Cull{
        count:number,
        list?:Array<History>
    }
    interface History{
        id: number;
        bookId: string;
        userId: number;
        userName: string;
        bookName: string;
        publicIp?: any;
        privateIp?: any;
        typeId: number;
        createTime: number;
        updateTime: number;
        bookInfo: BookInfo;
    }
    interface BookInfo {
        title: string[];
        author: string[];
        edition: string[];
        ceci: string[];
        coverPicture: string;
    }

    interface Content {
        content?:string,
        userId?:string | number,
        userName:string,
        userContact?:string,
        messageType:number,
        typeId:string | number
    }
    interface Message{
        count:number,
        list?:Array<ListMessage>
    }
    interface ListMessage {
        id: number;
        content: string;
        userId: number;
        userName: string;
        userContact?: any;
        messageType: number;
        messageTime: number;
        states: number;
        typeId: number;
        operator?: any;
        operatorName?: any;
        replyCont: string;
        replyState: number;
        replyTime?: any;
    }
}
declare namespace EventBus{
    /**
     * esesParams 检索条件
     */
    interface EsParams{
        searchName: string;
        searchValue: string;
        searchRelation: string;
        searchType: string;
        uid?:string | number
    }
    type Event<T = any> = {
        esParams:string,
        classification:string
    }
}