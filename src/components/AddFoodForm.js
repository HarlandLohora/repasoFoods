import React, { useState } from 'react'
import { Button, Form, Input } from "antd"

const AddFoodForm = (props) => {
    console.log(props)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")
    return (
        <div>
            <h3>Add food entry</h3>

            <Form layout='vertical'>
                <Form.Item label="Nombre">
                    <Input
                        placeholder='Ingresar nombre'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Image">
                    <Input
                        placeholder='Ingresar image'
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                </Form.Item>
                <Form.Item label="calories">
                    <Input placeholder='Ingresar calorias' value={calories} onChange={(event) => setCalories(event.target.value)} />
                </Form.Item>
                <Form.Item label="servings">
                    <Input placeholder='Ingresar servings' value={servings} onChange={(event) => setServings(event.target.value)} />
                </Form.Item>

                <Button type='primary'
                    onClick={() => {
                        props.agregarNuevaComida({ name, calories, image, servings })
                    }}>Create</Button>
            </Form>
        </div>
    )
}

export default AddFoodForm