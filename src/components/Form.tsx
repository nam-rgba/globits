
import { Formik, Form, Field } from 'formik'
import './Form.css'

type Country = {
    name: string;
    code: string;
    description: string;
}
type FormeProps = {
    country: Country;
    onClose: () => void;
    onSave: (country: Country) => void;
    newForm: boolean;
    onAdd: (country: Country) => void;
}
export const Forme = ({country, onClose, onSave, newForm, onAdd}: FormeProps) => {
  return (
    <div>
        <Formik
            initialValues={newForm ? {
                name: '',
                code: '',
                description: ''
            }:{
                name: country.name,
                code: country.code,
                description: country.description

            }}

            onSubmit={(values, actions) => {
                console.log(values)
                if(newForm){
                    onAdd(values)
                }else{

                    onSave(values)
                }
                onClose()
                actions.setSubmitting(false)
            }}
        >
            {
                formik=>(
                    <Form className='w-[30rem]'>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" placeholder="Enter name"  className='w-full rounded p-4 '/>

                        <label htmlFor="code">Code</label>
                        <Field id="code" name="code" placeholder="Enter code"  className='w-full rounded p-4 '/>

                        <label htmlFor="description">Description</label>
                        <Field id="description" name="description" placeholder="Enter description" as="textarea"  className='w-full rounded p-4 '/>

                        <div className='w-full flex flex-row justify-around mt-8'>
                            <button type="submit" disabled={formik.isSubmitting} className='bg-green-500 text-white rounded px-8 py-2'>
                                Save
                            </button>
                            <button type="button" onClick={onClose} className='bg-red-500 text-white rounded px-4 py-2'>
                                Discard
                            </button>
                        </div>
                    </Form>

                )
            }
        </Formik>
    </div>
  )
}
