

const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'bg-coral-red text-white border-coral-red'} ${fullWidth && 'w-full'}`}>
      {label}
      {iconUrl && <img src={iconUrl}
        alt="arrow right button"
        className="ml-2 w-5 h-5" />}
    </button>
  )
}

export default Button