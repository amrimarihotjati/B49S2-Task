import React, { Component } from 'react';


//API-Data
interface ApiItem {
    id: number;
    name: string;
    badge: string;
    description: string;
    categories: string[];
    imageUrl: string;
}

interface State {
    selectedTags: string[];
    selectedCategories: string[];
    apiData: ApiItem[];
}

export default class Home extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            selectedTags: [],
            selectedCategories: [],
            apiData: [],
        };
    }

    componentDidMount() {
        fetch('https://api.npoint.io/624c99ed50dcd45fb160')
            .then((response) => response.json())
            .then((data: ApiItem[]) => {
                this.setState({ apiData: data });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
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
                            {/* Search */}
                            <div className="form-control ml-10 mr-10 mt-7">
                                <div className="input-group">
                                    <input type="text" placeholder="Search…" className="input input-bordered" />
                                    <button className="btn btn-outline btn-success" onClick={(e) => this.handleSubmit(e)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>
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
                    </div>
                </div>
                <div>
                    <div className='text-center mt-10 mb-10'>
                        <h1 className='font-bold text-3xl text-indigo-600'>Cakes</h1>
                    </div>
                    {/* Card */}
                    <div className='flex flex-wrap flex-row space-x-12 justify-center mb-20 ml-5 mr-5'>
                    {/* Loop melalui data dummy dan render card untuk setiap objek */}
                    {this.state.apiData.map((item) => (
                        <div key={item.id} className="card w-96 bg-base-100 shadow-xl mt-10">
                            <figure>
                                <img src={item.imageUrl} alt={item.name} />
                            </figure>
                            <div className="card-body">
                            <h2 className="card-title">
                                {item.name}
                                <div className="badge badge-secondary">{item.badge}</div>
                            </h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                {item.categories.map((category) => (
                                <div key={category} className="badge badge-outline">{category}</div>
                                ))}
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}