import Feed from "@components/Feed"


const Home = () => {
  return (
      <section className='w-full flex-center flex-col'>
          <h1 className='head_text text-center'>
              Discover & use
              <br className='max-md:hidden' />
              <span className='orange_gradient text-center'> Open AI Prompts</span>
          </h1>
          <p className="desc text-center">
              Amazing prompts is an open-source AI prompting tool for modern creative. You can browse the collection below or generate your own.A collection of prompts for GPT-3 and Open AI.
          </p>
            <Feed />
    </section>
  )
}

export default Home