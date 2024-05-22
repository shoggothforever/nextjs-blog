import styles from  './layout.module.css'

export function Button(){
    return(
        <button type="button" id="btn_abandon" onClick={abandon}
        className={styles.error}>
            Abandon
        </button>
    )
}
function abandon(){
    alert("do not give up so easily");
}
