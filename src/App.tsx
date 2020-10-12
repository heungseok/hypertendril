import React from 'react';
import './App.scss';

function App() {

  const image = "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/hyperTendril_teaser.png?raw=true";

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>
            HyperTendril: Visual Analytics for User-Driven Hyperparameter Optimization for Deep Neural Networks
          </h1>
        </div>

        <div className="project_body">
          <div className="project_section">
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <img width="80%" src={image} alt="failed to load"/>
            </div>
            <div className="abstract">
              <h3 className="title">Abstract</h3>
              <div>
                To mitigate the pain of manually tuning hyperparameters of deep neural networks, automated machine learning (AutoML) methods have been developed to search for an optimal set of hyperparameters in large combinatorial search spaces. However, the search results of AutoML methods significantly depend on initial configurations, making it a non-trivial task to find a proper configuration. Therefore, human intervention via a visual analytic approach bears huge potential in this task. In response, we propose HyperTendril, a web-based visual analytics system that supports user-driven hyperparameter tuning processes in a model-agnostic environment. HyperTendril takes a novel approach to effectively steering hyperparameter optimization through an iterative, interactive tuning procedure that allows users to refine the search spaces and the configuration of the AutoML method based on their own insights from given results. Using HyperTendril, users can obtain insights into the complex behaviors of various hyperparameter search algorithms and diagnose their configurations. In addition, HyperTendril supports variable importance analysis to help the users refine their search spaces based on the analysis of relative importance of different hyperparameters and their interaction effects. We present the evaluation demonstrating how HyperTendril helps users steer their tuning processes via a longitudinal user study based on the analysis of interaction logs and in-depth interviews while we deploy our system in a professional industrial environment.
              </div>
            </div>
          </div>

          <div className="project_section">
            <h3 className="title">
              Contribution
            </h3>
            <div>
              <ul>
                <li>
                  A novel visual representation that visualizes the exploration history of AutoML algorithms.
                </li>
                <li>
                  A novel approach to effectively steer users’ hyperparameter optimization processes by guiding on important hyperparameters.
                </li>
                <li>
                  A deployed system scaling to large models.
                </li>
                <li>
                  User studies with NAVER engineers and researchers to show how our visualization and approach work in an AI research company.
                </li>
              </ul>
            </div>
          </div>

          <div className="project_section">
            <h3 className="title">
              Preview
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <div className="video-container">
                <iframe title="HyperTendril_preview" width="80%" src="https://www.youtube.com/embed/AewQb1As5A0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          <div className="project_section">
            <div className="links">
              <div>
                <a target="_blank" href="https://arxiv.org/abs/2009.02078">paper</a>
              </div>
              <div>
                <a target="_blank" href="https://demo-automl.nsml.navercorp.com/about">demo</a>
              </div>
            </div>
          </div>

          <div className="project_section">
            <h3 className="title">
              Citation
            </h3>
            <div>
              Heungseok Park, Yoonsoo Nam, Ji-hoon Kim, and Jaegul Choo. HyperTendril: Visual Analytics for User-Driven Hyperparameter Optimization for Deep Neural Networks. IEEE Transactions on Visualization and Computer Graphics and IEEE VIS 2020 (VAST).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
