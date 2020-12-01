export const Default = {
    _key: '',
    _title: '',
    _description: '',
    _$ref: '',
    _default: '',
    _enum: '',
    _type: '',
    _required: false,
    __ID__: '',
    _parent: '',
    _hideKey: false
};

export const TYPES = [{ 'label': 'Object', 'value': 'Object' },
{ 'label': 'String', 'value': 'String' },
{ 'label': 'Integer', 'value': 'Integer' },
{ 'label': 'Number', 'value': 'Number' },
{ 'label': 'Boolean', 'value': 'Boolean' },
// { 'label': 'Enum', 'value': 'Enum' },
{ 'label': 'URI', 'value': 'URI' },
{ 'label': '$ref', 'value': '$ref' },
{ 'label': 'Array', 'value': 'Array' }];

export const models = {
    forObject: {
        _default: undefined,
        _description: undefined,
        _required:undefined,
        _type: ['Object']
    },
    forString: {
        _maxLength: undefined,
        _minLength: undefined,
        _pattern: undefined,
        _default: undefined,
        _description: undefined,
        _type: ['String'],
        _format:['URI'],
        _enum:[]
    },
    forInteger: {
        _maximum: undefined,
        _minimum: undefined,
        _default: undefined,
        _description: undefined,
        _type: ['Integer'],
        _enum:[]
    },
    forNumber: {
        _maximum: undefined,
        _minimum: undefined,
        _default: undefined,
        _description: undefined,
        _type: ['Number'],
        _enum:[]
    },
    for$ref: {
        _type: ['$ref'],
        _default: undefined,
        _description: undefined,
        location: '#/definitions/',
        _enum:[]
    },
    forBoolean: {
        _default: undefined,
        _description: undefined,
        _type: ['Boolean']
    },
    forArray: {
        _maxItems: undefined,
        _minItems: undefined,
        _default: undefined,
        _items: undefined,
        _description: undefined,
        _type: ['Array'],
        _subTypes:['Object','String','Array' ,'Boolean' , '$ref' , 'URI' , 'Number','Integer']
    }
};

// _path:'#/definitions/'
// MODELS.fields = additional;

// MODELS.newArray = function (key, parent) {
//     var newArr = {};
//     angular.merge(newArr, MODELS.Default, additional.forArray);
//     MODELS._id_+=1;
//     newArr.__ID__ = '$model' + MODELS._id_;
//     newArr._key = key;
//     newArr._parent = (parent||'');
//     return newArr;
// };

// MODELS.newBoolean = function (key, parent) {
//     var newBool = {};
//     angular.merge(newBool, MODELS.Default, {_type: ['Boolean']});
//     MODELS._id_+=1;
//     newBool.__ID__ = '$model' + MODELS._id_;
//     newBool._key = key;
//     newBool._parent = (parent||'');
//     return newBool;
// };

// MODELS.newInteger = function (key, parent) {
//     var newInt = {};
//     angular.merge(newInt, MODELS.Default, additional.forInteger);
//     MODELS._id_+=1;
//     newInt.__ID__ = '$model' + MODELS._id_;
//     newInt._key = key;
//     newInt._parent = (parent||'');
//     return newInt;
// };

// MODELS.newNumber = function (key, parent) {
//     var newNum = {};
//     angular.merge(newNum, MODELS.Default, additional.forNumber);
//     MODELS._id_+=1;
//     newNum.__ID__ = '$model' + MODELS._id_;
//     newNum._key = key;
//     newNum._parent = (parent||'');
//     return newNum;
// };

// MODELS.newNull = function (key, parent) {
//     var newNull = {};
//     angular.merge(newNull, MODELS.Default, {_type: ['Null']});
//     MODELS._id_+=1;
//     newNull.__ID__ = '$model' + MODELS._id_;
//     newNull._key = key;
//     newNull._parent = (parent||'');
//     return newNull;
// };

// MODELS.newObject = function (key, props, parent) {
//     var newObj = {};
//     angular.merge(newObj, MODELS.Default, additional.forObject);
//     MODELS._id_+=1;
//     newObj.__ID__ = '$model' + MODELS._id_;
//     newObj._key = key;

//     if(props){
//         newObj._properties = props;
//     }
//     newObj._parent = (parent||'');

//     return newObj;
// };

// MODELS.newString = function (key, required, parent) {
//     var newStr = {};
//     angular.merge(newStr, MODELS.Default, additional.forString);
//     if(required){
//         newStr._required = true;
//     }
//     MODELS._id_+=1;
//     newStr.__ID__ = '$model' + MODELS._id_;
//     newStr._key = key;
//     newStr._parent = (parent||'');
//     return newStr;
// };

// MODELS.new$ref = function (key, value, parent,path) {
//     var newRef = {};
//     angular.merge(newRef, {}, additional.for$ref);
//     if(path)newRef._path = path;
//     MODELS._id_+=1;
//     newRef.__ID__ = '$model' + MODELS._id_;
//     newRef._key = key;
//     newRef._value = value;
//     newRef._parent = (parent||'');
//     return newRef;
// };

// MODELS.newXOf = function (type, key, props, parent) {
//     var newXOf = {};
//     angular.merge(newXOf, MODELS.Default, additional['for'+type]);
//     MODELS._id_+=1;
//     newXOf.__ID__ = '$model' + MODELS._id_;
//     newXOf._key = key;

//     if(props){
//         newXOf._properties = props;
//     }
//     newXOf._parent = (parent||'');

//     return newXOf;
// };

// MODELS.getObjPropertyByKey = function (obj, key) {
//     if (obj && obj._properties && obj._properties.length > 0) {
//         var found = false;
//         for (var i = 0; i < obj._properties.length; i++) {
//             var prop = obj._properties[i];
//             if (prop._key === key)
//                 found = prop;
//             if (found)
//                 return found;
//         }
//     }
//     return false;
// };