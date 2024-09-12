import headshot from '../assets/orion_headshot.jpg';


export default function About() {
    return (
        <div className="container mx-auto flex flex-col items-center">
            <h1 className="text-5xl font-bold mt-40">About</h1>
            <div className="flex flex-row items-center ml-8 mt-24 mb-60">
                <img src={headshot} alt="headshot" className='w-1/3 rounded-full mr-14'/>
                    <p className="text-2xl text-center m-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, nulla a pellentesque lacinia, ligula ligula malesuada magna, eu pulvinar massa ligula sed ante. Praesent malesuada ligula libero, dignissim pulvinar mi vulputate sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas auctor vitae dui sit amet aliquet. Sed dignissim diam eget nisl condimentum, nec vehicula leo ultrices. Praesent nec sem id orci condimentum lacinia a sit amet mi. Mauris vestibulum volutpat feugiat. Sed sed euismod enim. Morbi auctor diam sit amet tempor mattis.</p>
            </div>
        </div>
    );
}