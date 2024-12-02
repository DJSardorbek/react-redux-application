import { useState } from 'react'
import { Input, TextArea } from '../ui'

const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    return (
        <div className="text-center">
            <h1>Create Article</h1>
            <div className="w-75 mx-auto">
                <form >
                    <Input label="Title" state={title} setState={setTitle} />
                    <TextArea label="Description" state={description} setState={setDescription} />
                    <TextArea label="Body" state={body} setState={setBody} height='300px' />
                    <button
                        className="btn btn-lg btn-primary btn-block mt-2 w-100"
                        type="submit"
                        >
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateArticle