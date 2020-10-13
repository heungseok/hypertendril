import React from 'react';
import './App.scss';
import algorithmSelectionImg from './images/automl_algorithm_configuration.png';
import automlAlgorithmVisImg from './images/automl_algorithms_visualization.png';
import PBT_high_survive from './images/PBT_high_survive.gif';
import PBT_low_survive from './images/PBT_low_survive.gif';
import Hyperband_default from './images/HyperBand_default.gif';
import Hyperband_moreSH from './images/HyperBand_moreSH.gif';

function App() {

  const image = "https://github.com/heungseok/heungseok.github.io/blob/master/static/images/hyperTendril_teaser.png?raw=true";
  // const algorithmSelectionImg = 

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 style={{ marginBottom: 0 }}>
            HyperTendril: Visual Analytics for User-Driven Hyperparameter Optimization for Deep Neural Networks
          </h1>
          <div className="headerLinks">
            <div>
              <a target="_blank" href="https://arxiv.org/abs/2009.02078">paper</a>
            </div>
            <div>
              <a target="_blank" href="https://demo-automl.nsml.navercorp.com/about">demo</a>
            </div>
          </div>
        </div>

        <div className="project_body">
          <div className="project_section">
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <img width="90%" height="100%" src={image} alt="HyperTendril teaser image"/>
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
              Preview (25 Sec.)
            </h3>
            <div className="video-container-wrapper" >
              <div className="video-container">
                <iframe title="HyperTendril_preview" width="100%" src="https://www.youtube.com/embed/AewQb1As5A0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          <div className="project_section">
            <h3 className="title">
              AutoML needs to be set up carefully
            </h3>
            <div className="contents flex" style={{ justifyContent: 'space-around' }}>
              <div style={{
                flex: 1,
                margin: 'auto',
                lineHeight: '23px'
              }}>
                To relieve the pain of manually tuning hyperparameters of deep neural networks, several successful AutoML algorithms are developed such as <a href="https://arxiv.org/abs/1603.06560">HyperBand</a> and <a href="https://arxiv.org/abs/1711.09846">Popluation-Based-Training</a>.
                However, using the AutoML methods is difficult since each method requires delicate configuration settings before using it.
                For example, the evolutionary optimization algorithms need to carefully set the population size in advance, which determines the number of individuals to generate in each generation, since the convergence behaviors and final results can vary significantly.
                In addition, even the AI researcher and engineers are not familar with the AutoML algorithms, and it is hard to understand the inner-workings of the algorithms.
              </div>
              <div style={{ flex: 1 }}>
                <img style={{ width: '100%', height: '100%',  }} src={algorithmSelectionImg} alt="It is hard to select proper configuration of AutoML algorithm"/>
              </div>
            </div>
          </div>

          <div className="project_section">
            <h3 className="title">
              Visualization can facilitate understanding and diagnosing the AutoML
            </h3>
            <div style={{}}>
              <div style={{
                flex: 1,
                margin: 'auto',
                lineHeight: '25px'
              }}>
                HyperTendril takes a novel visual representation that visualizes the exploration history of AutoML methods, which facilitates understanding of complex behavior of the AutoML algorithms and diagnosis of the algorithm configurations with algorithm-agnostic support.
              </div>
              <div style={{ flex: 1 }}>
                <img style={{ width: '100%', height: '100%', paddingTop: '10px' }} src={automlAlgorithmVisImg} alt="Exploration history view"/>
                <div style={{ color: '#555' }}>Figure 1: HyperTendril's Exploration Historiy View visualized the exploration results of the five different AutoML methods with different configurations. </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <img style={{ width: '35%', height: '100%', padding: '8px' }} src={PBT_high_survive} alt="PBT visualization (high survivor rate)"/>
                <img style={{ width: '35%', height: '100%', padding: '8px' }} src={PBT_low_survive} alt="PBT visualization (low survivor rate)"/>
              </div>
              <div style={{ color: '#555' }}>
                Figure 2: Comparing high and low survivor rate <i>(S)</i> of Population Based Training (PBT) algorithm, 0.75 and 0.5 repectively (<i>Population size = 20, Generation size = 5</i>).
                <i>lr</i> and <i>depth</i> are the learning rate and layer depth hyperparameters of the <a href="https://arxiv.org/abs/1512.03385">ResNet</a> models, respectively.</div>

              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <img style={{ width: '35%', height: '100%', padding: '8px' }} src={Hyperband_default} alt="HyperBand visualization (high survivor rate)"/>
                <img style={{ width: '35%', height: '100%', padding: '8px' }} src={Hyperband_moreSH} alt="HyperBand visualization (high survivor rate)"/>
              </div>
              <div style={{ color: '#555' }}>Figure 3: Comparing low and high maximum resources <i>(R)</i> of HyperBand algorithm, 16 and 32 repectively (<i>eta = 2</i>). </div>
            </div>
          </div>

          <div className="project_section">
            <h3 className="title">
              Citation
            </h3>
            <div>
              <a target="_blank" href="https://heungseok.github.io/">Heungseok Park</a>, Yoonsoo Nam, Ji-hoon Kim, and <a target="_blank" href="https://sites.google.com/site/jaegulchoo/">Jaegul Choo</a>. HyperTendril: Visual Analytics for User-Driven Hyperparameter Optimization for Deep Neural Networks. IEEE Transactions on Visualization and Computer Graphics and IEEE VIS 2020 (VAST).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
