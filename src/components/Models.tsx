import { Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { getModelBrand, getModels } from '../store/actions/modelsActions';
import { ModelB, useModelsBDispatch, useModelsDispatch } from '../types/models';

const { Option } = Select;


const emptyForm = {
  id: 0,
  brand: "",
  model: "",

}

function Models(){
    const {data, loading, error} = useSelector((state: AppState) => state.models);


    const {data: brands} = useSelector((state: AppState) => state.brands);

    const [chosenModel, setChosenModel] = useState("");
    const [chosenBrand, setChosenBrand] = useState("");
    const [modelId, setModelId] = useState<number | null>(null);
    const [modelB, setModelB] = useState<ModelB>(emptyForm);


    console.log(data);
    console.log(brands);

    const modelArray = data.map(brand => brand.brand);
    const brandss = Array.from(new Set(modelArray));
    console.log(modelArray);


    const dispatch = useModelsDispatch();
    const dispatchB = useModelsBDispatch();


    const onBrandChange = (value: any) => {
      console.log(value);
      dispatchB(getModelBrand(value));
      //console.log(data);
    };

    const onModelChange = (value:any ) => {
      console.log(value);
      dispatchB(getModelBrand(value));
      const a = brands.filter(model => model.model === value);
      console.log(a.map(id => id.id));
      const b = (a.map(id => id.id))
      var c = b[0] ;
      setModelId(c);
      
      
    };
    console.log(modelId);

  
    useEffect(() => {
      dispatch(getModels());
    }, [])
  return (
    <>
        Models
          <Select defaultValue={"Select Brand"} style={{ width: 120 }} onChange={onBrandChange} >
          {brandss.map((brand => (
            <Option key={brand} value={brand}>
              {brand}
            </Option>
          )))}
        </Select>
        <Select style={{ width: 120 }} onChange={onModelChange}>
          {brands.map((bb => (
            <Option key={bb.model} value={bb.model} >{bb.model}</Option>
          )))}
        </Select> 
    </>
  )
}

export default Models