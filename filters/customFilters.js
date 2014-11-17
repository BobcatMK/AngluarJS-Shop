angular.module("customFilters", [])
    .filter("unique", function() {
        return function(item, propertyName) {
            if (angular.isArray(item) && angular.isString(propertyName)) {
                var results = [];
                var keys = {};
                for (var i = 0; i < item.length; i++) {
                    var val = item[i][propertyName];
                    if (angular.isUndefined(keys[val])) {
                        keys[val] = true;
                        results.push(val);
                    }
                }
                return results;
            } else {
                return item;
            }
        }
    })
    .filter("range",function($filter) {
        return function(data,page,size) {
            if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
                var start_index = (page - 1) * size;
                if (data.length < start_index) {
                    return [];
                } else {
                    return $filter("limitTo")(data.splice(start_index),size);
                }
            } else {
                return data;
            }
        }
    })
    .filter("pageCount",function() {
        return function(data,size) {
            if (angular.isArray(data)) {
                var result = [];
                for (var i = 0; i < Math.ceil(data.length / size); i++) {
                    result.push(i);
                }
                return result;
            } else {
                return data;
            }
        }
    });