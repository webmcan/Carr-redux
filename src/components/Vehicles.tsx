import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select, Space, Table } from 'antd';
//import type { ColumnsType } from 'antd/es/table';

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { getModelBrand, getModels } from '../store/actions/modelsActions';
import { addVehicle, deleteVehicle, getVehicleId, getVehicles, updateVehicle } from '../store/actions/vehiclesActions';
import { useModelsBDispatch, useModelsDispatch } from '../types/models';
import { useVehicleIdDispatch, useVehiclesDispatch, Vehicle, VehiclesForm } from '../types/vehicles';
const { Option } = Select;



type Mode = "new" | "edit" | "delete" ; 



const emptyForm = {
  plate: "",
  modelId: 0,
  modelYear: 0,
  notes: "",
}

function Vehicles ()  {

    const {data , loading, error} = useSelector((state: AppState) => state.vehicles);
    const {data: models} = useSelector((state: AppState) => state.models);
    const {data: brands} = useSelector((state: AppState) => state.brands);
    //const {data: vehicleId} = useSelector((state: AppState) => state.vehicleId);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState<Mode>("new");
    const [updateId, setUpdateId] = useState<number | null>(null);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [form, setForm] = useState<VehiclesForm>(emptyForm);
    const [ModelId, setModelId] = useState<number | null>(0);

    const modelArray = models.map(brand => brand.brand);
    const brandss = Array.from(new Set(modelArray));
    console.log(brandss);


    console.log(data, loading, error);

    const openModal = (mode: Mode) => {
      setIsModalOpen(true);
      setMode(mode);
    };

    const handleOk = () => {
      if (mode === "new")dispatch(addVehicle(form));
      else if (mode === "edit")
        dispatch(updateVehicle(form, updateId as number));
      else if (mode === "delete")
        dispatch(deleteVehicle(deleteId as number));

      setIsModalOpen(false);
      //setMode("new");
      setForm(emptyForm);
      setUpdateId(null);
      setModelId(null);
    };

    // const sendVehicleId = (id:any) => {
    //     dispatchVehicleId(id);
    // };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      //setMode("new");
      setForm(emptyForm);
      setUpdateId(null);
      setDeleteId(null);
      setModelId(null);
    };

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
      setForm({...form, modelId: c});
      
    };

    console.log(ModelId);


      
      const columns = [
        {
          title: 'Plate',
          dataIndex: 'plate',
          key: 'plate',
        },
        {
          title: 'Brand',
          dataIndex: 'brand',
          key: 'brand',
        },
        {
          title: 'Model',
          dataIndex: 'model',
          key: 'model',
        },
        {
          title: 'Model Year',
          dataIndex:'modelYear',
          key: 'modelYear',
        },
        {
          title: 'Notes',
          dataIndex: 'notes',
          key: 'notes',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text : string, vehicle: Vehicle, ModelId:any) => (
            <Space size="middle">
              <EditOutlined color='green'
                onClick={() => {
                  openModal("edit");
                  setForm({
                    plate: vehicle.plate,
                    modelId: ModelId,
                    modelYear: vehicle.modelYear,
                    notes: vehicle.notes,
                  });
                  setUpdateId(vehicle.id);
                  console.log(vehicle.id);
                }}
              />
              <DeleteOutlined color='red'
                onClick={() => {
                  openModal("delete");
                  setForm({
                    plate: vehicle.plate,
                    modelId: ModelId,
                    modelYear: vehicle.modelYear,
                    notes: vehicle.notes,
                  });
                  setDeleteId(vehicle.id);
                }}
                  
              />
            </Space>
          ),
        },
        
      ];
      
    

    //const dispatchM = useModelsDispatch();
    const dispatchB = useModelsBDispatch();
      
    const dispatch = useVehiclesDispatch();

    const dispatchModel = useModelsDispatch();

    //const dispatchVehicleId = useVehicleIdDispatch();

    useEffect(() => {
      dispatchModel(getModels());
      dispatch(getVehicles());
      
    }, []);
    
  

  return (
    <>
      <div>
        <Button onClick={() => openModal("new")} type="primary" >
          Add a Vehicle
        </Button>
        {mode === "new" || mode === "edit" ? 
        <Modal title={mode === "new" ? "Add new Vehicle" : "Update Vehicles"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form.Item label="Plate">
            <Input name="plate" value={form.plate} onChange={e => setForm({...form, plate: e.target.value})}/>
          </Form.Item>
          <Form.Item label="ModelId" >
            {/* <Input name='modelId' value={form.modelId} onChange={e => setForm({...form, modelId: parseInt(e.target.value)})}/> */}
            <Select  defaultValue={"Select brand"} style={{ width: 120 }} onChange={onBrandChange} >
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

          </Form.Item>
          <Form.Item label="ModelYear" rules={[{ type: 'number', min: 1930, max: 2022 }]}>
            <Input name='modelYear' value={form.modelYear} onChange={e => setForm({...form, modelYear: parseInt(e.target.value)})}/>
          </Form.Item>
          <Form.Item label="Notes">
            <Input name='notes' value={form.notes} onChange={e => setForm({...form, notes: e.target.value})}/>
          </Form.Item>
       </Modal> : mode === "delete" ? 
       <Modal title = "delete vehicle" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>Delete ?</Modal> : null }
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default Vehicles