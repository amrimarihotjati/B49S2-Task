import React from 'react';


//DummyData
interface DummyItem {
    id: number;
    name: string;
    badge: string;
    description: string;
    categories: string[];
    imageUrl: string;
}

const dummyData: DummyItem[] = [
    {
      id: 1,
      name: 'American Heritage Chocolate',
      badge: 'NEW',
      description: 'Kue dengan citarasa ala Amerika, dibalut dengan coklat yang lumer dan kaya, dan dibuat dengan bahan - bahan pilihan.',
      categories: ['Cake', 'Chocolate'],
      imageUrl: 'https://micro-frontend-one.vercel.app/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg',
    },
    {
      id: 2,
      name: 'White Bread',
      badge: 'NEW',
      description: 'Roti tawar yang gak bisa di tawar harganya tapi bisa ditaburi dengan meses ataupun selai agar rasanya semakin gurih dan manis, cocok untuk sarapan pagi.',
      categories: ['Breads'],
      imageUrl: 'https://micro-frontend-one.vercel.app/charles-chen-w2ZFjDnUL3w-unsplash.jpg',
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      badge: 'NEW',
      description: 'Kue coklat dengan rasa manis dan gurih, dibalut pula dengan saus coklat yang nikmat, memanjakan lidah kamu.',
      categories: ['Cake', 'Chocolate'],
      imageUrl: 'https://micro-frontend-one.vercel.app/chocolate-cake-with-chocolate-sprinkles.jpg',
    },
    {
        id: 4,
        name: 'Croissants',
        badge: 'NEW',
        description: 'Kue dengan rasa yang renyah dan gurih, pilihan yang menarik dipadukan dengan kopi ataupun teh, rasa yang dapat memanjakan lidah.',
        categories: ['Bread', 'Favorite'],
        imageUrl: 'https://micro-frontend-one.vercel.app/conor-brown-sqkXyyj4WdE-unsplash.jpg',
    },
    {
        id: 5,
        name: 'Strawberry Shortcake',
        badge: 'NEW',
        description: 'Kue manis dengan baluran saus stroberi yang manis, membuat rasanya menggugah selera, kue yang layak dijadikan buah tangan.',
        categories: ['Bread', 'New'],
        imageUrl: 'https://micro-frontend-one.vercel.app/cute-mini-strawberry-shortcake-pink.jpg',
    },
    {
        id: 5,
        name: 'Mie Goreng Pedas',
        badge: 'NEW',
        description: 'Makanan yang bisa kamu jadikan cemilan ataupun penghilang rasa lapar, cocok untuk kamu yang malas memasak dan ingin yang instan.',
        categories: ['Bread', 'Favorite'],
        imageUrl: 'https://micro-frontend-one.vercel.app/ikhsan-baihaqi-RwAXb8Hv_sU-unsplash.jpg',
    }
];

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
                    {dummyData.map((item) => (
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