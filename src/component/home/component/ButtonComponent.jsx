export default function ButtonComponent(props) {
    return (
        <button className="px-5 block mx-auto py-2 rounded-lg duration-300 hover:text-2xl text-lg font-bold text-[#292D77] border border-2 border-gradient" >
            {props.namebutton}
        </button>
    )
}
