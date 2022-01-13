import User from '../models/User';

export const createUsers = async () => {

    try {

        const count = await User.estimatedDocumentCount();

        if( count > 0 ) return;

        const values = await Promise.all([
            new User({
                firstname: "Carlos",
                lastname: "Jacquin",
                idnumber: 72288848,
                typedoc: "CC",
                address: "Calle 74 # 39 - 32",
                phone: "3182310491",
                email: "atuxlife@gmail.com",
                password: await User.encryptPassword("AZ92adx$!"),
                role: "admin"
            }).save(),
            new User({
                firstname: "Mauricio",
                lastname: "Montes",
                idnumber: 72288616,
                typedoc: "CC",
                address: "Calle 94 # 43 - 108",
                phone: "3143156971",
                email: "mmontesrestrepo@gmail.com",
                password: await User.encryptPassword("Pass123$!"),
                role: "user"
            }).save(),
            new User({
                firstname: "Laura",
                lastname: "Torres",
                idnumber: 32288616,
                typedoc: "CC",
                address: "Calle 45 # 9F - 45",
                phone: "3143340403",
                email: "lalatorres@gmail.com",
                password: await User.encryptPassword("Pass123$!"),
                role: "user"
            }).save()
        ]);

        console.log(values);

    } catch (error) {
        console.error(error);
    }

};