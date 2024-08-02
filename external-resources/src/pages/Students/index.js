import { SearchOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Input, Modal, Row, Table, Typography } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const { Title } = Typography;

const Student = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)


  const [listStudent, setListStudent] = useState([
    {
      id: 1,
      name: 'Student 1',
      age: 15,
      gender: 'nam',
      point: 9,
    },
    {
      id: 2,
      name: 'Student 2',
      age: 13,
      gender: 'nu',
      point: 2,
    },
    {
      id: 3,
      name: 'Student 3',
      age: 15,
      gender: 'nam',
      point: 5,
    }
  ])

  const columns = [
    {
      title: '#ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'point',
      dataIndex: 'point',
      key: 'point',
    },
  ];
  const handleOpenModal = () => {
    setIsOpenModal(true);
  }
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  //cách 1(cách thông thường)

  //khoi tao state quan ly du lieu
  // const [name, setName]= useState('')
  // const [gender, setGender] = useState('')
  // const [age, setAge]= useState('')
  // const [point, setPoint] = useState('')

  // const handleChangeName = (event)=>{       
  //   setName(event.target.value)
  // };
  // const handleChangeAge = (event)=>{
  //   setAge(event.target.value)
  // };
  // const handleChangeGender=(event)=>{
  //   setGender(event.target.value)
  // };
  // const handleChangePoint=(event)=>{
  //   setPoint(event.target.value)
  // }
  // const handleAddStudent = ()=>{
  //   const newStudent ={
  //     name:name,
  //     age:age,
  //     gender:gender,
  //     point:point,
  //   }
  //   setListStudent([...listStudent,newStudent])
  //   setIsOpenModal(false)
  //   setName('')
  //   setAge('')
  //   setGender('')
  //   setPoint('')
  // }


  //cách 2(sử dụng formik)

  const formik = useFormik({
    //khởi tạo dữ liệu ban đầu
    initialValues: {
      name: '',
      age: '',
      gender: '',
      point: '',
    },

    validationSchema: Yup.object({
      name:Yup.string()
      .required('bat buoc phai nhap ten')
      .min(2,'ten qua ngan')
      .max(20,'ten qua dai'),
      age: Yup.number()
      .required('bat buoc phai nhap tuoi')
      .min(6,'tuoi qua nho')
      .max(18, 'tuoi qua lon')
    }),

    onSubmit: (values,{resetForm}) => {
      console.log('value', values)
      setListStudent([...listStudent, values])
      handleCloseModal();
      resetForm();
    }
  });

  return <div style={{ padding: '100px' }}>
    <Modal
      title="them moi hoc sinh"
      open={isOpenModal}
      // onOk={handleAddStudent}
      onOk={formik.handleSubmit}
      onCancel={handleCloseModal}
      okText='Tao moi'
      cancelText='Dong lai'
    >
      <Input 
        placeholder="moi ban nhap ten..." 
        style={{ marginTop: '8px' }}  
        //cách thông thường
        // value={name} 
        // onChange={handleChangeName} 
        name='name'
        value={formik.values.name}
        onChange={formik.handleChange}
        
      />
      {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>:''}

      <Input 
        placeholder="moi ban nhap tuoi..." 
        style={{ marginTop: '8px' }} 
        // value={age} 
        // onChange={handleChangeAge} 
        name='age'
        value={formik.values.age}
        onChange={formik.handleChange}
        />
        {formik.errors.age ? <div style={{color:'red'}}>{formik.errors.age}</div>:''}

      <Input 
        placeholder="moi ban nhap gio tinh..." 
        style={{ marginTop: '8px' }} 
        // value={gender} 
        // onChange={handleChangeGender} 
        name='gender'
        value={formik.values.gender}
        onChange={formik.handleChange}
        />
        {formik.errors.gender ? <div style={{color:'red'}}>{formik.errors.gender}</div>:''}

      <Input  
        placeholder="moi ban nhap diem..." 
        style={{ marginTop: '8px' }} 
        // value={point} 
        // onChange={handleChangePoint} 
        name='point'
        value={formik.values.point}
        onChange={formik.handleChange}
        />
        {formik.errors.point ? <div style={{color:'red'}}>{formik.errors.point}</div>:''}
    </Modal>
    <Title level={2}>quan ly hoc sinh</Title>
    <div>
      <Row>
        <Col span={3}>
          <Input prefix={<SearchOutlined />} placeholder='Tim kiem...' />
        </Col>
        <Col style={{ marginLeft: '12px' }}>
          <Button type='primary' icon={<UserAddOutlined />} onClick={handleOpenModal}>them moi</Button>
        </Col>
      </Row>

      <Row style={{ marginTop: '24px' }}>
        <Col span={12}>
          <Table dataSource={listStudent} columns={columns} />
        </Col>
      </Row>
    </div>
  </div>
}
export default Student