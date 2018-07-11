//获取某个数组的index
Array.prototype.indexOf = function (val) {
    for(var i = 0; i < this.length; i++){
        if(this[i] == val){return i;}
    }
    return -1;
}

//删除某个数组元素
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if(index > -1){this.splice(index,1);}
}

//去重
Array.prototype.norepeat = function () {
    var arr = this,
        result = [],
        i,
        j,
        len = arr.length;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        result.push(arr[i]);
    }
    return result;
}

function parseURL(url) {
    var result = [];
    var query = url.split("?")[1];
    var queryArr = query.split("&");
    var params = {};
    queryArr.forEach(function (item) {
        var key = item.split("=")[0];
        var value = item.split("=")[1];
        params[key] = value;
    });
    return params;
}

// var url = "https://127.0.0.1:300?key=123&page=1&name=xiaoming";
//["key=123", "page=1", "name=xiaoging"]
//[["key", "123"], ["page", [1]]]

// console.log(parseUrl(url));


function goback() {
    window.history.back(-1);
}