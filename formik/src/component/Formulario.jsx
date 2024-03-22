import {Formik ,Form,Field,ErrorMessage} from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

const formulario =()=>{ 

    const[formularioEnviado,cambiarFormularioEnviado] = useState(false);

    
    const validationSchema = yup.object({
            nombre:yup.string()
            .matches( /^[a-zA-ZÀ-ÿ\s]{1,40}$/,"el nombre solo puede tener letras").required("campos requeridos"),
            correo:yup.string()
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"el email solo puede contener letras, numeros,puntos,guiones y guion bajo").required("Campo obligatorio")
            
        })
    
    return( 
     <Formik 

        initialValues={{
            nombre:'',
            correo:''
        }} 
        validationSchema={validationSchema}

        onSubmit={(valores , {resetForm}) =>{ 
            resetForm();
            console.log('Formulario Enviado');
            cambiarFormularioEnviado(true);
            setTimeout(() =>cambiarFormularioEnviado(false), 5000);
        }}
     >
        {({errors}) => (
            <Form className="formulario">
            {console.log('Errores:', errors)}   
            <div>
                <label>Nombre</label>
                < Field 
                        type="text" 
                        id ="nombre" 
                        name="nombre" 
                        placeholder="Jhon Doe"              
                />
                <ErrorMessage name='nombre' component={()=>(
                    <div className='error'>{errors.nombre}</div>
                )}/>
                
            </div>
            <div>
                <label htmlFor='correo'>Email</label>
                < Field 
                    type="email" 
                    id ="correo" 
                    name="correo" 
                    placeholder="email@email.com"
                   
                />
                <ErrorMessage name='correo' component={()=>(
                    <div className='error'>{errors.correo}</div>
                )}/>
                <div>
                    <Field name="pais" as="select">
                        <option value="mexio">Mexico</option>
                        <option value="colombia">Colombia</option>
                        <option value="venezuela">Venezuela</option>
                    </Field>
                </div>
                <div>
                    <label>
                        <Field type="radio"  name="sexo" value="hombre"/ > Hombre
                    </label>
                    <label>
                        <Field type="radio"  name="sexo" value="mujer"/ > Mujer
                    </label>
                </div>

            </div>
            <button type="submit">Enviar</button>
           {formularioEnviado && <p className='exito'>Formulario enviado con exito!</p>} 
          </Form> 
        )}
         
     </Formik>
              
    );
}

export default formulario;