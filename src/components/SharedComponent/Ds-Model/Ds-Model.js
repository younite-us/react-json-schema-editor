import React from 'react';
import ForObject from './Models/ForObject/ForObject';

const DsModel = (props) => {
    switch (props.subType) {
        case "Object":
            return <ForObject {...props} />;
        case "String":
        //     return <ForString {...this.props} />;
        // case "Integer":
        //     return <ForInteger {...this.props} />;
        // case "Number":
        //     return <ForNumber {...this.props} />;
        // case "$ref":
        //     return <For$ref {...this.props} />;
        // case "Boolean":
        //     return <ForBoolean {...this.props} />;
        // case "Array":
        //     return <ForArray  {...this.props} />;
        default:
            return <ForObject {...props} />
    }
}

export default DsModel;