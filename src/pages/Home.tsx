import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

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

    render(){
        return(
            <React.Fragment>
                <div className='w-full h-screen bg-white flex'>
                    <div className='flex-[5%] w-full h-full p-10'>
                        {/* Title Filter */}
                        <h1 className='text-3xl text-neutral-900 text-left font-semibold flex justify-start items-center gap-2'>
                            <FontAwesomeIcon
                                icon={faFilter}
                                className='text-base text-white p-2 bg-indigo-900 rounded-full'
                            />
                            Filter
                        </h1>
                        <hr className="border border-neutral-700 rounded-full mt-5"></hr>
                        {/* Search Button */}
                        <div className="form-control mr-10 mt-7">
                            <div className="join">
                                <div>
                                    <div>
                                    <input className="input input-bordered join-item" placeholder="Search"/>
                                    </div>
                                </div>
                                <div className="indicator">
                                    <button className="btn join-item" onClick={(e) => this.handleSubmit(e)}>Search</button>
                                </div>
                            </div>
                        </div>
                        {/* Category */}
                        <details className="collapse collapse-arrow border border-base-300 bg-base-200 mt-5">
                            <summary className='collapse-title text-xl font-medium'>
                                Category
                            </summary>
                            <div className='collapse-content'>
                                {/* CheckBox Items */}
                                <label className='label cursor-pointer justify-start gap-5'>
                                    <input type="checkbox" className='checkbox checkbox-success' onChange={() => this.handleTagChange('Borgir')}/>
                                    <span className='label-text text-neutral-900'>
                                        Borgir
                                    </span>
                                </label>
                                {/* CheckBox Items */}
                                <label className='label cursor-pointer justify-start gap-5'>
                                    <input type="checkbox" className='checkbox checkbox-success' onChange={() => this.handleTagChange('Bread')}/>
                                    <span className='label-text text-neutral-900'>
                                        Bread
                                    </span>
                                </label>
                                {/* CheckBox Items */}
                                <label className='label cursor-pointer justify-start gap-5'>
                                    <input type="checkbox" className='checkbox checkbox-success' onChange={() => this.handleTagChange('Breakfast')}/>
                                    <span className='label-text text-neutral-900'>
                                        Breakfast
                                    </span>
                                </label>
                            </div>
                        </details>
                        {/* Tag */}
                        <details tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 mt-5">
                            <summary className='collapse-title text-xl font-medium'>
                                Tag
                            </summary>
                            <div className='collapse-content'>
                                {/* CheckBox Items */}
                                <label className='label cursor-pointer justify-start gap-5'>
                                    <input type="checkbox" className='checkbox checkbox-secondary' onChange={() => this.handleCategoryChange('FAVORITE')}/>
                                    <div className='badge badge-secondary'>
                                        FAVORITE
                                    </div>
                                </label>
                                {/* CheckBox Items */}
                                <label className='label cursor-pointer justify-start gap-5'>
                                    <input type="checkbox" className='checkbox checkbox-accent' onChange={() => this.handleCategoryChange('FEATURED')}/>
                                    <div className='badge badge-accent'>
                                        FEATURED
                                    </div>
                                </label>
                                {/* CheckBox Items */}
                                <label className='label cursor-pointer justify-start gap-5'>
                                    <input type="checkbox" className='checkbox checkbox-primary' onChange={() => this.handleCategoryChange('NEW')}/>
                                    <div className='badge badge-primary'>
                                        NEW
                                    </div>
                                </label>
                            </div>
                        </details>
                    </div>
                    <div className='flex-[95%] w-full h-full flex-wrap bg-slate-100 '>
                        <div className='grid grid-cols-3 gap-4'>
                            {this.state.apiData.map((item) => (
                                <div className='m-5'>
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
