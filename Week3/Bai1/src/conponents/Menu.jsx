export default function Menu() {
    return (
        <>
                <div className="logo">
                    <img src="../public/chefify.png" alt
                    ="logo"/>
                </div>
                
                <div className="search-box">
                    <input type="text" placeholder="Search..."/>
                    <button>Search</button>
                </div>
                
                <nav className="nav">
                    <a href="#">What to cook</a>
                    <a href="#">Recipes</a>
                    <a href="#">Ingredients</a>
                    <a href="#">Occasions</a>
                    <a href="#">About Us</a>
                </nav>
                
                <button class="recipe-box">Your Recipe Box</button>
                
                <div class="avatar"></div>
        </>
    );
}