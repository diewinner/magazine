import {Button, Modal} from "react-bootstrap";
import {useInput} from "../../../../hooks/Validation/useInput";



export const SignInModal = (props) => {
    const email = useInput('', {isEmpty:true,isDirty:true, minLength:5, maxLength:25, isEmail: true})
    const password = useInput('', {isEmpty:true, minLength:8, maxLength:12 })
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Registration
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className={'modal_input_container'}>
                        <label form={'email'}>Email</label>
                        {(email.isEmpty && email.isDirty ) && <div className={'modal_input_error'}>Field cannot be empty</div>}
                        {(email.minLengthError && email.isDirty ) && <div className={'modal_input_error'}>Too short</div>}
                        {(email.maxLengthError && email.isDirty ) && <div className={'modal_input_error'}>Too long</div>}
                        {(email.emailError && email.isDirty ) && <div className={'modal_input_error'}>Incorrect email</div>}
                        <input
                            onChange={(e) => email.onChange(e)}
                            onBlur={(e) => email.onBlur(e)}
                            value={email.value}
                            type='text'
                            name='email'
                            id={'email'}
                            placeholder='Enter your email..'/>
                    </div>
                    <div className={'modal_input_container'}>
                        <label form={'password'}>Password</label>
                        {(password.isEmpty && password.isDirty) && <div className={'modal_input_error'}>Field cannot be empty</div>}
                        {(password.minLengthError && password.isDirty) && <div className={'modal_input_error'}>Too short</div>}
                        {(password.maxLengthError && password.isDirty) && <div className={'modal_input_error'}>Too long</div>}
                        <input
                            onChange={(e) => password.onChange(e)}
                            onBlur={(e) => password.onBlur(e)}
                            value={password.value}
                            type='password'
                            name='password'
                            id={'password'}
                            placeholder='Enter your password'/>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" disabled={!email.inputValid || !password.inputValid} onClick={props.onHide}>Sign In</Button>
                <Button variant="dark" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}