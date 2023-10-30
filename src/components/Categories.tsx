

type CategoriesProps = {
    categoryId: number;
    onClickSortByCategory: (i: number) => void;
}

const Categories = ({ categoryId, onClickSortByCategory }: CategoriesProps) => {

    const categories = ['Все', 'Классические', 'Запеченые', 'Острые', 'Фруктовые'];

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => (
                    <li key={i} onClick={() => onClickSortByCategory(i)} className={categoryId === i ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Categories