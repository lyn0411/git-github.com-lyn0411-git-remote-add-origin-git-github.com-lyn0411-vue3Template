declare namespace Test{
    interface UserProfileResponse{
        id:number
        name:string
        email:string
        phone:string
    }
    type LoginResponse = Pick<UserProfileResponse,"id" | "name">// 选择部分属性
    type UserPartial = Omit<UserProfileResponse,"name" | "id"> // 去除name，id 属性
    
    type Role = "admin" | "user" | "guest"
    type UppercaseRole = Uppercase<Role> // 构造一个type 的所有属性都设置为大写
    type LowercaseRole = Lowercase<UppercaseRole> // 小写
    type CapitailzeRole = Capitalize<Role> // 首字母大写
    type NonAdmin = Exclude<Role,"admin"> // 去除admin
    type Admin = Extract<Role,"admin"> // 选择部分类型


    type PartialUser = Partial<UserProfileResponse> // 所有属性可选

    type RequiredUser = Required<PartialUser> // 所有属性必填

    type ReadonlyUser = Readonly<UserProfileResponse> // 所有属性只读
    
    interface Address {
        street:string
        pin:number
    }
    interface Addresses {
        home:Address
        office:Address
    }
    type AddressesRecard = Record<"home" | "office" , Address> // 构造一个类型T的属性都为K的类型，每个属性K都映射到类型T 与上等价

}