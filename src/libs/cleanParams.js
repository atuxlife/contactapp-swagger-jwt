
export const cleanParams = (obj) => {
    for (let dakey in obj) {
        if (obj[dakey] === null || obj[dakey] === undefined || obj[dakey].length == 0) {
            delete obj[dakey];
        }/*  else {
            obj[dakey] = new RegExp('^'+obj[dakey]+'$', "i");
        } */
    }
    return obj;
};