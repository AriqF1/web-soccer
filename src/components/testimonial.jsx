const Testimonial = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                "This site gives fans everything — live scores, team stats, and
                news. It's like having the Premier League in your pocket."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Thierry Henry
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  Premier League Legend
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
