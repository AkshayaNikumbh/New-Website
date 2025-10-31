import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications | Atmospheric Convection and Dynamics Group",
  description: "Publications and research papers from the Atmospheric Convection and Dynamics Group at IIT Bombay.",
};

const PublicationPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Publications" />
      
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="mx-auto max-w-4xl">
              {/* Publications List */}
              <div className="space-y-12">

                 {/* Publication 1 */}
                <div className="publication-entry">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-lg font-bold uppercase text-dark dark:text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif', letterSpacing: '0.5px', fontSize: '1.4rem' }}>
                          GLOBAL HOTSPOTS OF LARGE PRECIPITATION EXTREMES
                        </span>
                        <a 
                          href="https://www.researchsquare.com/article/rs-7617796/v1" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                          
                        </a>
                      </div>
                      <div className="ml-4 text-sm text-dark dark:text-white" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.1rem' }}>
                            <p className="mb-1">
                              <span className="font-bold">Akshaya C. Nikumbh</span>, Akash Devgan, Dargan Frierson, Subimal Gosh, Balaji Rajagopalan, Yi Ming
                            </p>
                        <p className="italic text-gray-600 dark:text-gray-400">
                          <span className="italic">Prepreint</span> <a href="https://www.researchsquare.com/article/rs-7617796/v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Link</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                
                {/* Publication 2 */}
                    <div className="publication-entry">
                      <div className="flex items-start">
                        <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-lg font-bold uppercase text-dark dark:text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif', letterSpacing: '0.5px', fontSize: '1.4rem' }}>
                          DOES INCREASING HORIZONTAL RESOLUTION IMPROVE THE SIMULATION OF INTENSE TROPICAL RAINFALL IN GFDL&apos;S AM4 MODEL?
                        </span>
                        <a 
                          href="https://essopenarchive.org/users/575191/articles/671703-does-increasing-horizontal-resolution-improve-the-simulation-of-intense-tropical-rainfall" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                          
                        </a>
                      </div>
                      <div className="ml-4 text-sm text-dark dark:text-white" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.1rem' }}>
                            <p className="mb-1">
                              <span className="font-bold">Akshaya C. Nikumbh</span>, Pu Lin, David Paynter, Yi Ming
                            </p>
                        <p className="italic text-gray-600 dark:text-gray-400">
                          GRL <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023GL106708" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Link</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-200 dark:border-gray-700"></div>

                {/* Publication 3 */}
                <div className="publication-entry">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-lg font-bold uppercase text-dark dark:text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif', letterSpacing: '0.5px', fontSize: '1.4rem' }}>
                          ATMOSPHERE AND OCEAN ENERGY TRANSPORT IN EXTREME WARMING SCENARIOS
                        </span>
                        <a 
                          href="https://journals.plos.org/climate/article?id=10.1371/journal.pclm.0000343" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                          
                        </a>
                      </div>
                      <div className="ml-4 text-sm text-dark dark:text-white" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.1rem' }}>
                            <p className="mb-1">
                              Alyssa Poletti, Dargan M. W. Frierson, Travis Aerenson, <span className="font-bold">Akshaya C. Nikumbh</span>, Rachel Carroll, William Henshaw
                            </p>
                        <p className="italic text-gray-600 dark:text-gray-400">
                          <span className="italic">PLOS Climate</span>, February 2024. <a href="https://journals.plos.org/climate/article?id=10.1371/journal.pclm.0000343" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Link</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-200 dark:border-gray-700"></div>

                {/* Publication 3 */}
                <div className="publication-entry">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-lg font-bold uppercase text-dark dark:text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif', letterSpacing: '0.5px', fontSize: '1.4rem' }}>
                          THE ROLE OF NORTH ATLANTIC BLOCKING HIGH DURING LARGE-SCALE HEAVY RAINFALL EVENTS OVER CENTRAL INDIA
                        </span>
                        <a 
                          href="https://journals.ametsoc.org/view/journals/atsc/80/7/JAS-D-22-0185.1.xml" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                          
                        </a>
                      </div>
                      <div className="ml-4 text-sm text-dark dark:text-white" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.1rem' }}>
                            <p className="mb-1">
                              <span className="font-bold">Akshaya Nikumbh</span>, A. B. S. Thakur, A. Chakraborty, G. S. Bhat, J. Sukhatme
                            </p>
                        <p className="italic text-gray-600 dark:text-gray-400">
                          <span className="italic">Journal of Atmospheric Sciences</span>, March 2023. <a href="https://journals.ametsoc.org/view/journals/atsc/80/7/JAS-D-22-0185.1.xml" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Link</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-200 dark:border-gray-700"></div>

                {/* Publication 4 */}
                <div className="publication-entry">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-lg font-bold uppercase text-dark dark:text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif', letterSpacing: '0.5px', fontSize: '1.4rem' }}>
                          MULTISCALE INTERACTIONS BETWEEN MONSOON INTRA-SEASONAL OSCILLATIONS AND LOW-PRESSURE SYSTEMS THAT PRODUCE HEAVY RAINFALL EVENTS OF DIFFERENT SPATIAL EXTENTS
                        </span>
                        <a 
                          href="https://journals.ametsoc.org/view/journals/clim/aop/JCLI-D-21-0231.1/JCLI-D-21-0231.1.xml" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                          
                        </a>
                      </div>
                      <div className="ml-4 text-sm text-dark dark:text-white" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.1rem' }}>
                            <p className="mb-1">
                              <span className="font-bold">Akshaya Nikumbh</span>, A. Chakraborty, G. S. Bhat, D. M. W. Frierson
                            </p>
                        <p className="italic text-gray-600 dark:text-gray-400">
                          <span className="italic">Journal of Climate</span>, September 2021. <a href="https://journals.ametsoc.org/view/journals/clim/aop/JCLI-D-21-0231.1/JCLI-D-21-0231.1.xml" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Link</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-200 dark:border-gray-700"></div>

                {/* Publication 5 */}
                <div className="publication-entry">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-lg font-bold uppercase text-dark dark:text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif', letterSpacing: '0.5px', fontSize: '1.4rem' }}>
                          LARGE-SCALE EXTREME RAINFALL-PRODUCING SYNOPTIC SYSTEMS OF THE INDIAN SUMMER MONSOON
                        </span>
                        <a 
                          href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2020GL088403" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                          
                        </a>
                      </div>
                      <div className="ml-4 text-sm text-dark dark:text-white" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.1rem' }}>
                            <p className="mb-1">
                              <span className="font-bold">Akshaya Nikumbh</span>, A. Chakraborty, G. S. Bhat, D. M. W. Frierson
                            </p>
                        <p className="italic text-gray-600 dark:text-gray-400">
                          <span className="italic">GRL</span>, May 2020. <a href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2020GL088403" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Link</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-200 dark:border-gray-700"></div>

                {/* Publication 6 */}
                <div className="publication-entry">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-lg font-bold uppercase text-dark dark:text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif', letterSpacing: '0.5px', fontSize: '1.4rem' }}>
                          RECENT SPATIAL AGGREGATION TENDENCY OF RAINFALL EXTREMES OVER INDIA
                        </span>
                        <a 
                          href="https://www.nature.com/articles/s41598-019-46719-2" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                          
                        </a>
                      </div>
                      <div className="ml-4 text-sm text-dark dark:text-white" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.1rem' }}>
                            <p className="mb-1">
                              <span className="font-bold">Akshaya Nikumbh</span>, A. Chakraborty, G. S. Bhat
                            </p>
                        <p className="italic text-gray-600 dark:text-gray-400">
                          <span className="italic">Scientific Reports</span>, June 2019. <a href="https://www.nature.com/articles/s41598-019-46719-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Link</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-200 dark:border-gray-700"></div>

                {/* Publication 7 */}
                <div className="publication-entry">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-lg font-bold uppercase text-dark dark:text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif', letterSpacing: '0.5px', fontSize: '1.4rem' }}>
                          CLOUD FRACTION RETRIEVAL AND ITS VARIABILITY DURING DAYTIME FROM GROUND-BASED SKY IMAGERY OVER A TROPICAL STATION IN INDIA
                        </span>
                        <a 
                          href="https://www.sciencedirect.com/science/article/abs/pii/S1364682618307065" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                          
                        </a>
                      </div>
                      <div className="ml-4 text-sm text-dark dark:text-white" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.1rem' }}>
                            <p className="mb-1">
                              <span className="font-bold">Akshaya Nikumbh</span>, B. PadmaKumari, Sneha Sunil
                            </p>
                        <p className="italic text-gray-600 dark:text-gray-400">
                          <span className="italic">Journal of Atmospheric and Solar-Terrestrial Physics</span>, May 2019. <a href="https://www.sciencedirect.com/science/article/abs/pii/S1364682618307065" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Link</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicationPage;
