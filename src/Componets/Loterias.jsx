import React from 'react'


export default function select(){
    let options = [{label: "One", value: "one"}, {label: "Two", value: "two"}, {label: "Three", value: "three"}]
    return (
    	<Select options={options}
            defaultValue={{label: "Choose one", value: ""}}></Select>
    )
}