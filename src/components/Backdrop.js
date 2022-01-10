const Backdrop = (props) => {


    return (
        <div className={props.isBackdrop ? 'backdrop active-backdrop' : 'backdrop'}></div>

    )
}

export default Backdrop;