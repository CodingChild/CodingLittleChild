module Util {
    export function isString(target) {
        return typeof target === 'string' || target instanceof String;
    }
}