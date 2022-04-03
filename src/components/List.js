import '../sass/List.scss'

const List = () => {
    return(
        <section class="listCheckbox">
            <h2 className="listCheckbox_title">Todos</h2>
            <div className="checkbox">
                <div className="checkbox_item">
                    <label className="checkbox_label">
                        <input className="checkbox_input" type="checkbox"/>To learn the state in React
                    </label>
                </div>
                <div className="checkbox_item">
                    <label className="checkbox_label">
                        <input className="checkbox_input" type="checkbox"/>To cook a cake
                    </label>
                </div>
                <div className="checkbox_item">
                    <label className="checkbox_label">
                        <input className="checkbox_input" type="checkbox"/>To call Sofia
                    </label>
                </div>
            </div>
        </section>
    )
}
export default List