import { Carousel } from "@material-tailwind/react";
import CategoryDropdown from './CategoryDropdown';

function App() {

  const data = [
    {
      label: 'Grocery',
      imageurl: '/1.png',
      categories: [
        { label: 'Fruits', link: '#' },
        { label: 'Vegetables', link: '#' },
        { label: 'Dairy', link: '#' },
        { label: 'Snacks', link: '#' },
        { label: 'Drinks', link: '#' },
        { label: 'Drinks', link: '#' },
        { label: 'Drinks', link: '#' },
        { label: 'Drinks', link: '#' },
        { label: 'Drinks', link: '#' },
        { label: 'Drinks', link: '#' },
        { label: 'Drinks', link: '#' },
        { label: 'Drinks', link: '#' },
        { label: 'Drinks', link: '#' },
        { label: 'Drinks', link: '#' },
      ],
    },
    {
      label: 'Mobiles',
      imageurl: '/2.png',
      categories: [
        {
          label: 'Samsung',
          link: '#',
          subcategories: [
            { label: 'M23', link: '#' },
            { label: 'Galaxy S24', link: '#' },
          ]
        },
        { label: 'Ios', link: '#' },
        { label: 'Nothing', link: '#' },
        { label: 'Pixel', link: '#' },
        { label: 'One Plus', link: '#' },
      ],
    },
    {
      label: 'Electronics',
      imageurl: '/4.png',
      categories: [
        { label: 'Computers', link: '#' },
        { label: 'Printers', link: '#' },
        {
          label: 'Headphones',
          subcategories: [
            { label: 'All', link: '#' },
            { label: 'Bluetooth', link: '#' },
            { label: 'wired headphones', link: '#' },
            { label: 'true wireless earbuds', link: '#' },
            { label: 'Soundbars', link: '#' },
            { label: 'Home Theaters', link: '#' },
            { label: 'Remote Controls', link: '#' },
            { label: 'DTH Setup box', link: '#' },
            { label: 'Headphone case', link: '#' },
            { label: 'Covers', link: '#' },
            { label: 'Pouch', link: '#' },
            { label: 'more', link: '#' },
          ],
          link: '#'
        },
        { label: 'Earphones', link: '#' },
        { label: 'Speakers', link: '#' },
        { label: 'Gaming Mouse', link: '#' },
        { label: 'Mobile accessories', link: '#' },
        {
          label: 'Gaming',
          subcategories: [
            { label: 'Assassing creed', link: '#' },
            { label: 'God of war', link: '#' },
            { label: 'Gaming mat', link: '#' },
            { label: 'PS5', link: '#' },
            { label: 'Xbox', link: '#' },
            { label: 'RTX 3090', link: '#' },
            { label: 'RTX 3080', link: '#' },
            { label: 'spiderman', link: '#' },
            { label: 'spiderman 2', link: '#' },
            { label: 'Last of Us', link: '#' },
            { label: 'Outlast', link: '#' },
            { label: 'more', link: '#' },
          ],
          link: '#'
        },
        { label: 'Powerbank', link: '#' },
        { label: 'Smart home', link: '#' },
        { label: 'Camers', link: '#' },
        { label: 'Laptops', link: '#' },

      ],
    },
    {
      label: 'Gifts',
      imageurl: '/9.png',
      categories: [
        { label: 'Wishing Cards', link: '#' },
        { label: 'Gift Cards', link: '#' },
        { label: 'Jwellery', link: '#' },
        { label: 'Something random', link: '#' },
      ],
    },
    {
      label: 'Appliances',
      imageurl: '/6.png',
      categories: [
        { label: 'Washing Machine', link: '#' },
        { label: 'Television', link: '#' },
        { label: 'Television', link: '#' },
        { label: 'Television', link: '#' },
        { label: 'Television', link: '#' },
        { label: 'Television', link: '#' },
        { label: 'Television', link: '#' },
        { label: 'Television', link: '#' },
        { label: 'Television', link: '#' },
        { label: 'Television', link: '#' },

      ],
    },
    {
      label: 'Tickets',
      imageurl: '/7.png',
      categories: [
        { label: 'Airplane', link: '#' },
        { label: 'Train', link: '#' },
      ],
    },
    {
      label: 'Children',
      imageurl: '/10.png',
      categories: [
        { label: 'Toys', link: '#' },
        { label: 'Books', link: '#' },
        { label: 'School kits', link: '#' },
        { label: 'Pencils', link: '#' },
        { label: 'Art Materials', link: '#' },
      ],
    },
    {
      label: 'Vehicles',
      imageurl: '/11.png',
      categories: [
        { label: 'Car Accessories', link: '#' },
        { label: 'Bike Accessorires', link: '#' },
        { label: 'Helmets', link: '#' },
        { label: 'Washing material', link: '#' },
        { label: 'Spare parts', link: '#' },
      ],
    },
  ];


  return (
    <>
      <div className="mycontainer">
        <div className="myheader pt-4 bg-blue-700 text-white">
          <div className="w-full flex justify-between">
            <div className="ml-3 pt-1 pl-1 font-semibold text-lg" id="logo" >
              Flipkart
            </div>
            <div className="pt-1" style={{ width: '60%' }}>
              <input
                type="text"
                placeholder="Search"
                className="bg-slate-100 text-black font-medium rounded px-4 h-8"
                id="navSearchBar"
                style={{ width: '100%' }}
              />
            </div>
            <div className="w-fit flex gap-1 pl-1 mr-1">
              <div className="dropdown rounded">
                <button className="dropbtn rounded relative" onClick={() => window.location.href = "#"}>
                  <div className="smallIcons">
                    <span className="material-symbols-outlined">
                      person
                    </span>
                    <span className="material-symbols-outlined absolute">
                      arrow_drop_down
                    </span>
                  </div>
                  <div className="lgContent">
                    Profile
                    <span className="material-symbols-outlined absolute">
                      arrow_drop_down
                    </span>
                  </div>
                </button>

                <div className="dropdown-content">
                  <a href="#">My Profile</a>
                  <a href="#">Orders</a>
                  <a href="#">Wishlist</a>
                  <a href="#">Rewards</a>
                  <a href="#">Gift Cards</a>
                </div>
              </div>
              <div>
                <button className="customBtn rounded" onClick={() => {
                  window.location.href = "#"
                }}>

                  <div className="smallIcons">
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                  </div>

                  <div className="lgContent">
                    Cart
                  </div>
                </button>
              </div>
              <div>
                <button className="customBtn rounded" onClick={() => {
                  window.location.href = "#"
                }}>
                  <div className="smallIcons">
                    <span className="material-symbols-outlined">
                      Logout
                    </span>

                  </div>

                  <div className="lgContent">
                    Logout
                  </div>
                </button>
              </div>
            </div>

          </div>
          <div className="w-full bg-blue-700 flex justify-center py-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-slate-100 text-black font-medium rounded px-4 h-8"
              id="stickySearchBar"
              style={{ width: '98%' }}
            />
          </div>
        </div>

        <div className="mybody">

          <div className="w-full">
            <CategoryDropdown data={data} />
          </div>


          <div className="z-0">
            <Carousel transition={{ duration: 1 }} loop={true} autoplay={true} className="my-5" style={{ height: '300px' }}>
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>


          <div className="w-screen flex flex-wrap justify-evenly gap-1">

            <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </div>


          </div>

        </div>
        <div className="myfooter mt-2">
          <div className="h-full ">
            <footer className="bg-gray-900">
              <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                  <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-white">Company</h2>
                    <ul className="text-gray-400 font-medium">
                      <li className="mb-4">
                        <a href="#" className=" hover:underline">About</a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Careers</a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Brand Center</a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-white">Socials</h2>
                    <ul className="text-gray-400 font-medium">
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Discord Server</a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Twitter</a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Facebook</a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                    <ul className="text-gray-400 font-medium">
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Licensing</a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contact</h2>
                    <ul className="text-gray-400 font-medium">
                      <li className="mb-4">
                        <p href="#" className="hover:underline">Address: some random address</p>
                      </li>
                      <li className="mb-4">
                        <p href="#" className="hover:underline">Phone: 828273-1929</p>
                      </li>
                      <li className="mb-4">
                        <p href="#" className="hover:underline">e-mail: afas@gmail.com</p>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
