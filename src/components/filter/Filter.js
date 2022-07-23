import style from "./Filter.module.css";

const Filter = () => {
    const filter = [
        { label: "Active", num: 60 },
        { label: "Online", num: 16 },
        { label: "Filtered", num: 43 },
        { label: "Banned", num: 64 },
    ];

    return (
        <div className={style.filter}>
            {filter.map((item) => (
                <button key={item.label} className={style.filter_item}>
                    <p>{item.label}</p>
                    <h3>{item.num}</h3>
                </button>
            ))}
        </div>
    );
};
export default Filter;
