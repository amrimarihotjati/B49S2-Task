import React from 'react';

interface State {
    selectedTags: string[];
    selectedCategories: string[];
  }

export default class Home extends React.Component<string, State>{

    constructor(props: string){
        super(props);
        this.state = {
            selectedTags: [],
            selectedCategories:[],
        }
    }

    handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        const { selectedTags, selectedCategories } = this.state;
        const selectedItems = [...selectedTags, ...selectedCategories].join(', ');
        alert(`Selected items: ${selectedItems}`);
      }

    handleTagChange(tag: string) {
        this.setState((prevState) => ({
          selectedTags: prevState.selectedTags.includes(tag)
            ? prevState.selectedTags.filter((t) => t !== tag)
            : [...prevState.selectedTags, tag],
        }));
    }
      
    handleCategoryChange(category: string) {
        this.setState((prevState) => ({
          selectedCategories: prevState.selectedCategories.includes(category)
            ? prevState.selectedCategories.filter((c) => c !== category)
            : [...prevState.selectedCategories, category],
        }));
    }

    render() {
        return (
            <React.Fragment>
                {/* Filter */}
                <div className='flex flex-wrap flex-row justify-center'>
                    <div className='text-start mt-10 mb-1'>
                        <h1 className='font-bold text-3xl text-indigo-600'>Filter</h1>
                    </div>
                </div>
                <div className='flex flex-wrap flex-row justify-center'>
                    <div className='flex flex-wrap flex-row justify-center'>
                        <div className='flex flex-wrap flex-row justify-center'>
                            <div className='ml-10 mr-10'>
                                <div className="collapse collapse-arrow mt-5 w-full border border-base-300 bg-base-200">
                                    <input type="radio" name="my-accordion-2" />
                                    <div className="collapse-title text-1xl text-neutral-900 text-center font-semibold">
                                    Category
                                    </div>
                                        <div className="collapse-content">
                                            <div className="form-control text-neutral-900 w-full">
                                                <label className="label cursor-pointer justify-start gap-5">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-success"
                                                    onChange={() => this.handleTagChange('Borgir')}
                                                />
                                                <span className="label-text text-neutral-900">Borgir</span>
                                                </label>
                                            </div>
                                            <div className="form-control text-neutral-900 w-full">
                                                <label className="label cursor-pointer justify-start gap-5">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-success"
                                                    onChange={() => this.handleCategoryChange('Bread')}
                                                />
                                                <span className="label-text text-neutral-900">Bread</span>
                                                </label>
                                            </div>
                                        </div>
                                </div>  
                            </div>
                        </div>
                        <div>
                            <div className='ml-10 mr-10'>
                                <div className="collapse collapse-arrow mt-5 w-full border border-base-300 bg-base-200">
                                    <input type="radio" name="my-accordion-2" />
                                    <div className="collapse-title text-1xl text-neutral-900 text-center font-semibold">Tag</div>
                                        <div className="collapse-content">
                                            <div className="form-control text-neutral-900 w-full">
                                                <label className="label cursor-pointer justify-start gap-5">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-secondary"
                                                    onChange={() => this.handleTagChange('FAVORITE')}
                                                />
                                                <div className="badge badge-secondary">FAVOURITE</div>
                                                </label>
                                            </div>
                                            <div className="form-control text-neutral-900 w-full">
                                                <label className="label cursor-pointer justify-start gap-5">
                                                <input type="checkbox" className="checkbox checkbox-accent"
                                                onChange={() => this.handleTagChange('FEATURED')}
                                                />
                                                <div className="badge badge-accent">FEATURED</div>
                                                </label>
                                            </div>
                                            <div className="form-control text-neutral-900 w-full">
                                                <label className="label cursor-pointer justify-start gap-5">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-primary"
                                                    onChange={() => this.handleTagChange('NEW')}
                                                />
                                                <div className="badge badge-primary">NEW</div>
                                                </label>
                                            </div>
                                        </div>
                                </div>  
                            </div>
                        </div>
                        <button 
                            className="btn btn-outline btn-success mt-7" 
                            onClick={(e) => this.handleSubmit(e)}> 
                            Submit </button>
                    </div>
                </div>
                <div>
                    <div className='text-center mt-10 mb-10'>
                        <h1 className='font-bold text-3xl text-indigo-600'>Cakes</h1>
                    </div>
                    {/* Card */}
                    <div className='flex flex-wrap flex-row space-x-12 justify-center mb-20'>
                        <div className="card w-96 bg-base-100 shadow-xl mt-10">
                            <figure><img src="https://micro-frontend-one.vercel.app/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                American Heritage Chocolate
                                <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>Kue dengan citarasa ala amerika, dibalut dengan coklat yang lumer dan kaya, dan dibuat dengan bahan - bahan pilihan.</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">Cake</div> 
                                <div className="badge badge-outline">Chocolate</div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl mt-10">
                            <figure><img src="https://micro-frontend-one.vercel.app/charles-chen-w2ZFjDnUL3w-unsplash.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                White Bread
                                <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>Roti tawar yang gak bisa di tawar harganya tapi bisa ditaburi dengan meses ataupun selai agar rasanya semakin gurih dan manis, cocok untuk sarapan pagi.</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">Breads</div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl mt-10">
                            <figure><img src="https://micro-frontend-one.vercel.app/chocolate-cake-with-chocolate-sprinkles.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                Chocolate Cake
                                <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>Kue coklat dengan rasa manis dan gurih, dibalut pula dengan saus coklat yang nikmat, memanjakan lidah kamu.</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">Cake</div> 
                                <div className="badge badge-outline">Chocolate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}