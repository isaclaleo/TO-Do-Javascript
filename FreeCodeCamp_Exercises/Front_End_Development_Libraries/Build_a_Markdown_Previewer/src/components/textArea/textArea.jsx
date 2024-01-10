import PropTypes from 'prop-types'
function  TextArea(props) {
  return(
    <>
    <div className="flex justify-center items-center">
      <textarea
      className="peer block min-h-[auto] w-full rounded border-2 border-rose-500 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      color="red"
      id="editor"
      rows="3"
      placeholder="Ingresa el texto"
      ></textarea>
      <label
      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
      >{props.text}</label>
    </div>
    
    </>
  )
}

TextArea.propTypes = {
  text: PropTypes.string.isRequired
}

export default TextArea