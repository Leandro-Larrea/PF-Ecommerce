import style from "./createButton.scss"

export function CreateButton({loader, name}){
    return <div>{!loader?
                <button type="submit" className="button">{name}</button>:
                <button  className="buttonLoading"></button>
            }</div>
}