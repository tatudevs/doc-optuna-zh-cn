Search.setIndex({docnames:["faq","index","installation","privacy","reference/cli","reference/distributions","reference/exceptions","reference/importance","reference/index","reference/integration","reference/logging","reference/multi_objective/index","reference/multi_objective/samplers","reference/multi_objective/study","reference/multi_objective/trial","reference/pruners","reference/samplers","reference/storages","reference/structs","reference/study","reference/trial","reference/visualization","tutorial/attributes","tutorial/cli","tutorial/configurations","tutorial/distributed","tutorial/first","tutorial/index","tutorial/pruning","tutorial/rdb","tutorial/sampler"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["faq.rst","index.rst","installation.rst","privacy.rst","reference/cli.rst","reference/distributions.rst","reference/exceptions.rst","reference/importance.rst","reference/index.rst","reference/integration.rst","reference/logging.rst","reference/multi_objective/index.rst","reference/multi_objective/samplers.rst","reference/multi_objective/study.rst","reference/multi_objective/trial.rst","reference/pruners.rst","reference/samplers.rst","reference/storages.rst","reference/structs.rst","reference/study.rst","reference/trial.rst","reference/visualization.rst","tutorial/attributes.rst","tutorial/cli.rst","tutorial/configurations.rst","tutorial/distributed.rst","tutorial/first.rst","tutorial/index.rst","tutorial/pruning.rst","tutorial/rdb.rst","tutorial/sampler.rst"],objects:{"optuna.distributions":{CategoricalDistribution:[5,1,1,""],DiscreteUniformDistribution:[5,1,1,""],IntUniformDistribution:[5,1,1,""],LogUniformDistribution:[5,1,1,""],UniformDistribution:[5,1,1,""],check_distribution_compatibility:[5,4,1,""],distribution_to_json:[5,4,1,""],json_to_distribution:[5,4,1,""]},"optuna.distributions.CategoricalDistribution":{choices:[5,2,1,""],single:[5,3,1,""]},"optuna.distributions.DiscreteUniformDistribution":{high:[5,2,1,""],low:[5,2,1,""],q:[5,2,1,""],single:[5,3,1,""]},"optuna.distributions.IntUniformDistribution":{high:[5,2,1,""],low:[5,2,1,""],single:[5,3,1,""]},"optuna.distributions.LogUniformDistribution":{high:[5,2,1,""],low:[5,2,1,""],single:[5,3,1,""]},"optuna.distributions.UniformDistribution":{high:[5,2,1,""],low:[5,2,1,""],single:[5,3,1,""]},"optuna.exceptions":{CLIUsageError:[6,1,1,""],DuplicatedStudyError:[6,1,1,""],OptunaError:[6,1,1,""],StorageInternalError:[6,1,1,""],TrialPruned:[6,1,1,""]},"optuna.integration":{ChainerMNStudy:[9,1,1,""],ChainerPruningExtension:[9,1,1,""],CmaEsSampler:[9,1,1,""],FastAIPruningCallback:[9,1,1,""],KerasPruningCallback:[9,1,1,""],LightGBMPruningCallback:[9,1,1,""],MXNetPruningCallback:[9,1,1,""],PyTorchIgnitePruningHandler:[9,1,1,""],PyTorchLightningPruningCallback:[9,1,1,""],SkoptSampler:[9,1,1,""],TFKerasPruningCallback:[9,1,1,""],TensorFlowPruningHook:[9,1,1,""],XGBoostPruningCallback:[9,1,1,""]},"optuna.integration.ChainerMNStudy":{optimize:[9,3,1,""]},"optuna.integration.lightgbm":{train:[9,4,1,""]},"optuna.logging":{disable_default_handler:[10,4,1,""],disable_propagation:[10,4,1,""],enable_default_handler:[10,4,1,""],enable_propagation:[10,4,1,""],get_verbosity:[10,4,1,""],set_verbosity:[10,4,1,""]},"optuna.multi_objective":{samplers:[12,0,0,"-"],study:[13,0,0,"-"],trial:[14,0,0,"-"]},"optuna.pruners":{BasePruner:[15,1,1,""],HyperbandPruner:[15,1,1,""],MedianPruner:[15,1,1,""],NopPruner:[15,1,1,""],PercentilePruner:[15,1,1,""],SuccessiveHalvingPruner:[15,1,1,""]},"optuna.pruners.BasePruner":{prune:[15,3,1,""]},"optuna.samplers":{BaseSampler:[16,1,1,""],GridSampler:[16,1,1,""],RandomSampler:[16,1,1,""],TPESampler:[16,1,1,""],intersection_search_space:[16,4,1,""]},"optuna.samplers.BaseSampler":{infer_relative_search_space:[16,3,1,""],sample_independent:[16,3,1,""],sample_relative:[16,3,1,""]},"optuna.samplers.TPESampler":{hyperopt_parameters:[16,3,1,""]},"optuna.storages":{RDBStorage:[17,1,1,""]},"optuna.structs":{FrozenTrial:[18,1,1,""],StudyDirection:[18,1,1,""],StudySummary:[18,1,1,""],TrialState:[18,1,1,""]},"optuna.structs.FrozenTrial":{datetime_complete:[18,2,1,""],datetime_start:[18,2,1,""],distributions:[18,2,1,""],intermediate_values:[18,2,1,""],number:[18,2,1,""],params:[18,2,1,""],state:[18,2,1,""],user_attrs:[18,2,1,""],value:[18,2,1,""]},"optuna.structs.StudyDirection":{MAXIMIZE:[18,2,1,""],MINIMIZE:[18,2,1,""],NOT_SET:[18,2,1,""]},"optuna.structs.StudySummary":{best_trial:[18,2,1,""],datetime_start:[18,2,1,""],direction:[18,2,1,""],n_trials:[18,2,1,""],study_id:[18,3,1,""],study_name:[18,2,1,""],system_attrs:[18,2,1,""],user_attrs:[18,2,1,""]},"optuna.structs.TrialState":{COMPLETE:[18,2,1,""],FAIL:[18,2,1,""],PRUNED:[18,2,1,""],RUNNING:[18,2,1,""]},"optuna.study":{Study:[19,1,1,""],create_study:[19,4,1,""],delete_study:[19,4,1,""],get_all_study_summaries:[19,4,1,""],load_study:[19,4,1,""]},"optuna.study.Study":{best_params:[19,3,1,""],best_trial:[19,3,1,""],best_value:[19,3,1,""],direction:[19,3,1,""],enqueue_trial:[19,3,1,""],get_trials:[19,3,1,""],optimize:[19,3,1,""],set_user_attr:[19,3,1,""],study_id:[19,3,1,""],trials:[19,3,1,""],trials_dataframe:[19,3,1,""],user_attrs:[19,3,1,""]},"optuna.trial":{FixedTrial:[20,1,1,""],Trial:[20,1,1,""]},"optuna.trial.Trial":{datetime_start:[20,3,1,""],distributions:[20,3,1,""],number:[20,3,1,""],params:[20,3,1,""],report:[20,3,1,""],set_user_attr:[20,3,1,""],should_prune:[20,3,1,""],study_id:[20,3,1,""],suggest_categorical:[20,3,1,""],suggest_discrete_uniform:[20,3,1,""],suggest_int:[20,3,1,""],suggest_loguniform:[20,3,1,""],suggest_uniform:[20,3,1,""],user_attrs:[20,3,1,""]},"optuna.visualization":{is_available:[21,4,1,""],plot_contour:[21,4,1,""],plot_intermediate_values:[21,4,1,""],plot_optimization_history:[21,4,1,""],plot_parallel_coordinate:[21,4,1,""],plot_slice:[21,4,1,""]},optuna:{"--debug":[4,5,1,"cmdoption-optuna-debug"],"--log-file":[4,5,1,"cmdoption-optuna-log-file"],"--quiet":[4,5,1,"cmdoption-optuna-q"],"--storage":[4,5,1,"cmdoption-optuna-storage"],"--verbose":[4,5,1,"cmdoption-optuna-v"],"--version":[4,5,1,"cmdoption-optuna-version"],"-q":[4,5,1,"cmdoption-optuna-q"],"-v":[4,5,1,"cmdoption-optuna-v"],distributions:[5,0,0,"-"],exceptions:[6,0,0,"-"],importance:[7,0,0,"-"],integration:[9,0,0,"-"],logging:[10,0,0,"-"],multi_objective:[11,0,0,"-"],pruners:[15,0,0,"-"],samplers:[16,0,0,"-"],storages:[17,0,0,"-"],structs:[18,0,0,"-"],study:[19,0,0,"-"],trial:[20,0,0,"-"],visualization:[21,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["std","cmdoption","program option"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"std:cmdoption"},terms:{"1e10":[0,1,22,24],"1e2":20,"25th":15,"280758099793617e":23,"916284393762304e":26,"\u4e00\u4e2a":1,"\u4e0e\u5f00\u53d1\u8005\u4e92\u52a8":1,"\u4ed3\u5e93\u7684":2,"\u4f18\u5316\u8fc7\u7a0b":1,"\u4f46\u662f\u5728\u53d1\u9001pull":1,"\u4f60\u4e5f\u53ef\u4ee5\u5728":2,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7":2,"\u4f8b\u5982":1,"\u5206\u652f\u4e0b\u7528\u5f00\u53d1\u6a21\u5f0f\u5b89\u88c5optuna":2,"\u53ef\u5728":1,"\u540c\u65f6":1,"\u548c":1,"\u548c\u95ee\u95ee\u9898":1,"\u57fa\u4e8e\u76ee\u6807\u51fd\u6570\u7684\u4f18\u5316\u8fc7\u7a0b":1,"\u591a\u529f\u80fd\u548c\u8de8\u5e73\u53f0\u67b6\u6784":1,"\u5b83\u7684\u4e00\u5927\u7279\u8272\u662f\u6709\u7740":1,"\u5b89\u88c5":1,"\u5bf9\u4e0d\u7406\u60f3\u5b9e\u9a8c":1,"\u5e76\u884c\u7684\u5206\u5e03\u5f0f\u4f18\u5316":1,"\u6211\u4eec\u4ee5\u5982\u4e0b\u65b9\u5f0f\u4f7f\u7528":1,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528":2,"\u6216\u8005\u66f4\u65b0\u7248\u672c\u7684":2,"\u62a5\u544abug":1,"\u63a8\u8350\u4f7f\u7528":[],"\u63d0\u95ee":1,"\u63d0featur":1,"\u652f\u6301":2,"\u65e8\u5728\u52a0\u901f\u548c\u81ea\u52a8\u5316\u6b64\u7c7b":1,"\u662f\u4e00\u4e2a\u7279\u522b\u4e3a\u673a\u5668\u5b66\u4e60\u800c\u8bbe\u8ba1\u7684\u81ea\u52a8\u8d85\u53c2\u6570\u4f18\u5316\u8f6f\u4ef6\u6846\u67b6":1,"\u6709\u5982\u4e0b\u73b0\u4ee3\u5316\u7684\u529f\u80fd":1,"\u6765\u5b89\u88c5":2,"\u6765\u627e\u51fa\u6700\u4f73\u7684\u8d85\u53c2\u6570\u503c\u96c6":1,"\u6b22\u8fce\u5927\u5bb6\u5bf9optuna\u7684\u4e00\u5207\u8d21\u732e":1,"\u6bd4\u5982\u9009\u62e9":1,"\u7528":1,"\u7531\u4e8e\u8fd9\u79cdapi":1,"\u7684\u5b58\u5728":1,"\u7684\u63d0\u524d\u526a\u679d":1,"\u7684\u7528\u6237\u4e5f\u53ef\u4ee5\u52a8\u6001\u5730\u6784\u9020\u8d85\u53c2\u6570\u7684\u641c\u7d22\u7a7a\u95f4":1,"\u7684\u76ee\u7684\u662f\u901a\u8fc7\u591a\u6b21":1,"\u7684\u89c4\u8303":1,"\u76ee\u6807\u51fd\u6570\u7684\u5355\u6b21\u6267\u884c\u8fc7\u7a0b":1,"\u7f16\u5199\u7684\u4ee3\u7801\u6a21\u5757\u5316\u7a0b\u5ea6\u5f88\u9ad8":1,"\u800c":1,"\u8bf7\u53c2\u8003\u4e0b\u9762\u7684\u793a\u4f8b\u4ee3\u7801":1,"\u8f7b\u91cf\u7ea7":1,"\u8fd8\u662f":1,"\u8fd9\u4e24\u4e2a\u672f\u8bed":1,"\u98ce\u683c\u7684\u7528\u6237\u81ea\u5b9a\u4e49":1,"abstract":[15,16,30],"boolean":[15,20],"case":[0,9,19,21,24],"catch":[0,9,19],"class":[0,5,6,9,15,16,17,18,19,20,28,29,30],"default":[0,4,9,10,15,16,17,19,21],"export":[0,19],"final":25,"float":[0,5,19,20],"function":[1,5,9,15,16,17,18,19,20,21,22,23,24,27,29,30],"import":[0,1,6,8,9,10,15,16,17,19,20,21,22,23,25,26,28,29,30],"int":[5,16,24],"new":[1,19,23,25,27,30],"request\u65f6\u8bf7\u9075\u4ece":1,"return":[1,5,6,9,10,15,16,18,19,20,21,22,23,24,25,26,28,29,30],"short":19,"static":16,"true":[1,5,9,16,17,19,20,21,29],"try":[15,29],Added:[9,15,16,19],Adding:27,And:0,For:[0,9,15,16,19,24,25,28,29,30],NFS:25,Not:5,That:24,The:[0,9,15,16,18,19,20,21,24,26,29,30],Then:[16,25,30],There:[0,10,25],Uses:19,Using:0,With:16,Yes:0,__call__:0,__init__:[0,30],__main__:[23,25],__name__:[23,25],_current_tri:30,_rng:30,_temperatur:30,abort:0,about:[0,3,15,16,20,23],abov:[0,16,23,26,28,30],absenc:9,acceler:0,accept:[20,30],access:[17,19,20,22,29],accord:20,accuraci:[9,22,26],accuracy_scor:0,activ:27,adam:24,adapt:15,add:[3,9,24],add_event_handl:9,added:[5,9],addhandl:10,addit:29,advanc:[1,27],affect:9,after:[6,19,28],again:26,aggreg:18,agnost:[],akiba:[1,22],algorithm:[9,15,16,19,20,28,30],all:[0,5,10,15,16,19,20,21,26,28,29],alloc:15,alpha:[6,15,28],alreadi:[6,15,16,19],also:[0,16,18,19,22,24,25,28,29],alter:1,alwai:[5,9,15,20],among:[15,25],amount:15,analyz:[19,26],ani:[9,16,18,19,22],anneal:30,annot:22,anoth:[0,16,25],api:[0,1,9,24,26,30],append:24,appli:[19,20],arbitrari:0,architectur:16,arg:[9,16,19],argument:[1,9,17,19,27,29],arxiv:1,assert:[0,10,15,19,20],associ:[16,20],assum:[23,25],asynchron:15,attack:15,attr:[19,22,23,29],attribut:[1,17,18,19,20,23,27],auto:15,autom:28,automat:[9,19,20,28,29],avail:21,averag:15,avg_val_acc:9,avoid:25,backend:[0,1,6,9,17,23,27],background:19,bandit:15,bar:[0,19],base:[0,6,15,16,18,19,20,25,28,30],baseprun:[15,20],basesampl:[9,16,30],basestudi:16,basic:18,basic_train:9,batch_siz:20,batchsiz:20,becaus:[0,9,15,25,30],been:[10,15,16,18,20],befor:[16,28],begin:[16,30],behav:0,behavior:[0,19,30],behind:20,belong:[16,30],below:0,benchmark:15,best:[0,15,16,18,19,23,25,26,28,29],best_clf:0,best_param:[19,23,26,29],best_trial:[0,18,19,20,26,29],best_valu:[19,23,26,29],beta:23,between:[15,16],binari:9,binary_error:9,boilerpl:[23,30],bool:5,both:15,bottom:15,bound:9,boundaryhandl:9,bracket:15,branch:27,bst:[9,28],budget:15,bug:[],built:[9,30],calcul:[0,30],call:[0,5,9,15,16,20,26,28,29,30],callabl:[0,19],callback:[9,19,28],callback_fn:9,caller:[0,30],can:[1,3,4,9,15,16,17,19,20,22,23,24,26,28,29,30],candid:[5,16,20],cannot:[0,20,21,30],care:[15,16,20,23],cat:23,categor:[5,9,20,24],categoricaldistribut:[5,20],caught:0,caus:25,caveat:0,chainer:[9,24,28],chainer_integr:15,chainermn:9,chainermn_studi:9,chainermnstudi:9,chainerpruningextens:[9,28],chang:[0,9,15,16,19,20,28],characterist:15,chat:[],check:[0,5,9,15,20],check_distribution_compat:5,choic:[5,9,19,20],choos:[16,19],clarifi:26,classifi:[1,24],classifier_nam:24,classifier_obj:24,clf:[0,6,9,15,20,22,28],cli:[6,24],cliusageerror:6,close:26,closur:0,cma:[9,16],cma_opt:9,cma_std:9,cmaessampl:9,cmaevolutionstrategi:9,code:[16,20,21,23,25,30],collect:[3,15,19],column:19,com:[0,2,3,9,15,16,19],combin:16,come:9,comm:9,command:[1,8,22,24,25,27],commun:9,compat:[0,5,9],competit:15,complet:[0,9,15,16,18,26,29,30],complic:25,comput:24,concis:28,conda:2,condit:[0,28],configur:[1,6,10,15,17,20,27],conflict:19,connect:17,consecut:[18,20],consid:[15,16,20,25,30],consider_endpoint:16,consider_magic_clip:16,consider_prior:16,construct:[9,20],constructor:[9,19,20],consum:15,contain:[5,9,16,18,19,20,21,22,23,25],content:1,continu:[0,19,20,24,26],contour:21,contrast:20,contribut:1,contributor:22,control:19,convers:20,convert:20,copi:19,correl:[16,30],correspond:[0,9,16,19,26,30],corrupt:19,cost:24,count:19,counterpart:15,cpu:19,creat:[0,1,16,17,19,21,23,25,26,29,30],create_commun:9,create_engin:17,create_model:24,create_studi:[0,1,6,9,10,15,16,17,19,20,21,22,23,25,26,28,29,30],create_supervised_evalu:9,creation:19,critic:10,cross:9,cross_val_scor:22,csv:19,ctrl:[19,24],cuda:0,cuda_visible_devic:0,current:[6,9,10,15,19,23,25,28,30],current_valu:30,custom:[9,17],cyc_len:9,dashboard:23,data:[9,22,28],databas:[0,19,25],datafram:[19,29],dataset:[1,22,28],datetim:[18,20,26],datetime_complet:[18,19,26],datetime_start:[18,19,20,26],deal:0,debug:[4,10],decid:[19,28],decreas:30,deepcopi:19,def:[0,1,6,9,15,16,17,19,20,21,22,23,24,25,26,28,29,30],default_gamma:16,default_weight:16,defin:[1,19,20,22,27],definit:23,delet:[19,23],delete_studi:19,denot:[5,9,20],depend:[0,9,20,21,24],depict:16,deploi:20,deprec:[18,19,20],describ:[16,23,29,30],descript:[15,23],deseri:5,design:[],desir:[0,19],detail:[0,9,15,16,19,20,24,30],determin:[0,9,15,16,20,30],determinist:0,develop:9,deviat:9,devic:9,dictionari:[0,9,16,17,18,19,20],differ:[0,15,16,26],difficult:0,difficulti:24,dimens:[9,16],diment:21,direct:[6,15,16,18,19,20],directli:[9,17,26,28],disabl:[0,4,10,15,19],disable_default_handl:10,disable_propag:10,discard:0,discret:[5,16,20,24],discreteuniformdistribut:5,discuss:0,discussion_r361363897:15,dist:5,dist_new:5,dist_old:5,distribut:[0,1,8,9,16,18,19,20,26,27,29,30],distribution_to_json:5,dlpage:3,document:[19,29,30],doe:[0,15,16,20,28],doesn:30,domain:[5,20],don:[16,23,30],done:19,dot:20,doubl:10,draw:19,drop_path_r:24,dropout_r:24,dtest:9,dtrain:[9,28],due:[18,20],dump:[0,22],duplic:6,duplicatedstudyerror:[6,19],dure:[16,26,30],dvalid:28,dynam:[1,16],each:[0,9,15,16,18,19,20,26,28,30],earli:[15,19,28],early_stop_callback:9,easi:0,easiest:0,either:16,els:[1,24,30],emit:9,emploi:19,empti:19,enabl:[10,19,29],enable_default_handl:10,enable_propag:10,end:19,endpoint:[5,20],engin:[9,17,19,25],engine_kwarg:17,enjoi:[],enqueu:19,enqueue_tri:19,ensembl:[1,20,24],entir:28,entropi:9,environ:[0,21,29],epoch:[9,15,20],epoch_complet:9,error:[0,1,4,6,9,10,16,18,20,22,28],especi:9,estim:[9,16,24],eta:15,eval:[9,28],eval_data:9,eval_end_callback:9,eval_metr:9,eval_spec:9,evalu:[1,9,16,19,20,26,30],even:[0,19,23],event:9,exact:20,exampl:[0,4,6,9,10,15,16,17,19,20,21,22,23,24,25,27,28,29],exce:9,except:[1,4,8,9,15,19,28],exclud:[5,16,20],execut:[0,9,15,16,17,19,21,26,28,30],exist:[6,19],exit:4,exp:30,experi:[22,29,30],experiment:[9,15,16,19,27],exponenti:24,extend:9,extens:9,extra:0,factor:15,fail:[0,6,18,20],failur:0,fals:[5,15,16,17,19,21],faq:[1,25],far:16,fastai:[9,28],fastai_dev:9,fastaipruningcallback:[9,28],fatal:10,favor:[20,30],favorit:1,featur:[0,9,15,16,19,22,28,29,30],feature_fract:9,field:[0,18,19],figur:[16,21],file:[0,4,9,10,19,23,29],filehandl:10,filenam:28,fin:0,find:[0,3,20,26],fine:23,finish:[0,9,10,15,18,23,25,26,28],finit:15,first:[0,1,9,15,25,27,29,30],fit:[0,1,9,16,20],fit_one_cycl:9,five:24,fix:[0,15,19,20],fixedtri:[0,20],flag:19,flatten:19,float32:20,follow:[0,6,10,16,21,23,25,26,28,29,30],foo:[0,10,17,23,25],foo_studi:0,forg:2,form:[0,19,28],format:[0,5,9,23,24],found:26,fout:0,fraction:[15,20],framework:1,from:[1,5,6,9,15,16,19,20,25,26,30],frozentri:[15,18,19,26],full:15,func:[9,19],functool:[0,9],further:[0,9,16,19,30],fyi:24,gamma:[16,20],gaoptout:3,garbag:19,gaussian:16,gbm:9,gc_after_tri:19,gener:[1,5,16,19,20],get:[19,20,25,26,29],get_all_study_summari:[18,19,22],get_trial:19,get_verbos:10,getlogg:10,git:2,github:[0,1,2,9,15,16,19],gitter:1,give:[23,24],given:[0,5,9,15,16,19,20],gmm:16,goal:26,gpu:1,gradientboostingclassifi:20,graph_obj:21,grid:16,gridsampl:16,guarante:5,guid:[0,1,21],halv:15,handi:[0,19],handl:[1,19,28],handler:[9,10],happen:[1,19],hard:24,has:[10,15,16,18,19,20,24,26,30],have:[1,15,16,20],henc:20,heurist:15,hidden_layer_s:20,hierarch:19,high:[5,9,20,21,26,30],higher:21,histogram:19,histori:[19,21,25,27],hold:0,hook:9,how:[1,3,9,16,21,29,30],howev:[0,23],html:[3,25],http:[0,2,3,9,15,16,19,25],hundr:16,hyper:[16,26],hyperband:15,hyperbandprun:15,hyperopt:16,hyperopt_paramet:16,hyperparamet:[0,1,8,9,15,16,19,20],identifi:[0,15,19,29],ignit:[9,28],ignor:9,imper:[],implement:[0,15,16,19,27,28],impli:30,improv:3,includ:[5,16,19,20],inclus:15,incorpor:9,increas:[4,24],independ:[9,16,30],independent_sampl:[9,30],index:1,individu:[0,20],infer:[16,30],infer_relative_search_spac:[16,30],info:[0,10],inform:[3,16,29],inher:0,inherit:30,initi:[9,29],input:[0,15],input_fn:9,insid:[0,15,22,26,30],instal:[2,21],instanc:[0,9,16,17],instanti:[5,16,17,19,20,26,29],instead:[9,15,16,18,19,20,23],integ:[5,16,20],integr:[1,8,27,30],intend:9,interact:[],interest:30,interfac:[1,8,9,15,16,19,20,22,27,28],intermedi:[0,15,18,20,21,28],intermediate_valu:[6,15,18,20,26,28],intern:[18,19,20,26,30],intersect:16,intersection_search_spac:[9,16,30],interv:[9,15],interval_step:15,intervaltrigg:9,introduc:28,intuniformdistribut:5,invalid:6,invoc:26,invok:[1,16,19,23,30],ipython:[23,26],iri:[22,28],is_avail:21,is_higher_bett:9,isinst:[19,30],isn:21,issu:[0,1,25],item:[0,30],iter:28,its:[0,9,15],itself:19,job:19,joblib:0,json:[5,19,20,22],json_str:5,json_to_distribut:5,judg:15,jupyterlab:21,just:[5,16,19,25],kdd:1,keep:[15,17],kei:[0,16,19,20,22],kept:15,kera:[9,28],keraspruningcallback:[9,28],kernel:20,keyword:[9,17],kind:24,koyama:1,kwarg:9,lambda:0,larg:25,larger:15,launch:23,layer:24,learn:[1,9,26],learner:[9,20],learning_r:24,least:15,len:[9,26],length:9,let:[23,25,26,29],level:[0,10],lgb:9,librari:[1,5,9,10,15,17,19,20,28,30],lifetim:16,lightgbm:[9,28],lightgbmpruningcallback:[9,28],lightn:[9,28],lightningmodul:9,lightweight:[],like:[0,9,20,23,25,29],limit:[15,19],line:[1,8,22,27],linear:[5,20,24],linear_model:[6,15,20,28],link:1,list:[19,21,23,28],load:[0,19],load_boston:1,load_if_exist:[19,29],load_iri:[22,28],load_studi:[9,19,25],local:[0,29],localhost:17,log:[1,4,5,8,20,28],log_fil:4,log_validation_result:9,logger:10,logic:28,loguniform:24,loguniformdistribut:5,longer:17,look:15,loop:27,loss:[9,26],low:[5,9,20,26,30],lower:[5,20],machin:[1,26],made:20,mai:[0,9,15,16,19,20,25],main:9,make:[0,15,16,20],manag:[19,20,26],manner:9,manualscheduletrigg:9,masanori:1,master:2,math:15,mathsf:[15,20],max:30,max_depth:[1,24],max_lr:9,max_overflow:17,max_step:9,max_x:0,maxim:[6,9,15,16,18,19,30],maximum:15,mean:[9,22,28],mean_squared_error:1,meaning:20,mechan:[15,28],median:[15,28],medianprun:[15,19,28],meet:28,memori:[0,19],merror:9,messag:[1,9,20,28],method:[1,5,9,15,16,20,22,23,24,26,29,30],metric:[1,9],metric_nam:9,might:0,min:[15,30],min_child_sampl:9,min_early_stopping_r:15,min_early_stopping_rate_low:15,min_rang:9,min_resourc:15,min_x:0,minim:[1,9,15,16,18,19,22,26],minimum:[9,15],miss:21,mit:1,mixtur:16,mlpclassifi:20,mnist:22,mode:[0,10],model:[1,9,16,26],model_select:[1,22,28],modern:[],modul:[1,9,21,27],modular:[],momentum:20,momentumsgd:24,monitor:[9,28],more:[0,3,15,16,19,20],most:[0,20],much:28,multi:[1,8,29],multi_error:9,multi_index:19,multiindex:19,multipl:[15,16,20,25],multipli:9,must:15,mutat:19,mxnet:[9,28],mxnetpruningcallback:[9,28],mysql:[17,25,29],n_bracket:15,n_ei_candid:16,n_epoch:9,n_estim:20,n_job:[9,19],n_layer:24,n_startup_tri:[9,15,16],n_train_it:[6,15],n_trial:[0,1,6,9,10,15,16,18,19,20,21,23,24,25,26,28,29,30],n_unit:24,n_units_l:24,n_warmup_step:15,naiv:9,name:[6,9,16,18,19,20,23,25,29,30],nan:1,natur:19,necessari:24,need:[15,28,30],neighbor_high:30,neighbor_low:30,neighborhood:30,neither:[16,24],network:[0,9,20],neural:[0,9,20],neural_network:20,never:15,newer:[9,15,16,19],newli:5,next:[1,15,19,30],node:[25,29],non:[0,16,19],none:[5,9,16,17,19,20,21,24,30],nopprun:15,nor:24,not_set:18,note:[5,9,10,15,17,18,19,20,21,22,23],notic:[9,15,16,19],notimplementederror:30,now:[0,23],num_lay:24,number:[0,4,9,15,16,18,19,20,26,29],numpi:[20,30],object:[1,5,6,8,9,10,15,16,17,18,19,20,21,22,23,24,25,27,28,29,30],observ:[9,15],observation_kei:9,obtain:[1,9,26],off:[15,17,19,20],offset:15,ohta:1,omit:9,onc:16,one:[15,16,19,20,25,30],ones:0,onli:[9,15,16,23,30],open:[0,10],oper:6,opt:3,optim:[1,6,9,10,15,16,17,19,20,21,23,27,28,29,30],option:[0,9,19,24],optuna:[2,4,5,6,9,10,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30],optunaerror:6,order:[0,10,19],org:25,other:[0,29,30],otherwis:[5,15,19,20,21],our:[3,23,26],out:[3,26,29],outcom:26,output:[4,10,26],over:15,overflow:[],overview:27,own:[1,30],page:1,pair:22,panda:[19,29],paper:[15,16],parallel:[0,9,19],param:[0,9,18,19,20,21,23,26,28,29,30],param_distribut:[16,30],param_nam:[16,30],paramet:[0,5,9,10,15,16,17,18,19,20,21,23,25,26,27,28,29,30],params_x:[19,29],partial:[0,9],partial_fit:[6,15,20,28],particular:15,particularli:[],parzen:16,pass:[5,9,16,17,19,20,26,29,30],penalti:20,percentil:15,percentileprun:15,perform:[9,25,30],period:28,persist:[0,19,29],pickl:0,pip:[2,21],pipelin:30,pkl:0,place:15,platform:[],pleas:[0,9,10,15,16,18,19,20,21,23,24,25,29,30],plot:21,plot_contour:21,plot_intermediate_valu:21,plot_optimization_histori:21,plot_parallel_coordin:21,plot_slic:21,plotli:21,point:[15,16,30],poli:20,pool_pre_p:17,pool_siz:17,popul:9,possibl:0,postgresql:[17,25,29],postpon:15,pre:20,predefin:28,predict:[0,1],prefer:0,prev_trial:30,prevent:[10,17],previou:[15,30],previous:[5,20],print:[0,23,29],prior:[9,15,16,19],prior_weight:16,probabl:30,problem:0,procedur:[15,16],process:[16,20,25],program:[0,4],progress:19,promot:15,propag:[0,10],properli:16,properti:[18,19,20,22,26,29],provid:[0,9,15,17,19,20,22,23,26,28,29,30],prune:[1,6,9,15,18,20,27],pruner:[1,8,19,20,27],pruner_trigg:9,pruning_callback:[9,28],pruning_hook:9,pull:15,purpos:0,put:25,pytest:0,python:[0,2,23,25,28],pytorch:[9,28],pytorch_lightn:9,pytorchignitepruninghandl:[9,28],pytorchlightningpruningcallback:[9,28],quadrat:[9,27],quantiz:16,question:[],quiet:4,rais:[0,6,15,16,19,20,28,30],ran:18,random:[0,9,16,30],random_st:[1,20,28],randomforest:[1,24],randomforestclassifi:[20,24],randomforestregressor:1,randomsampl:[0,9,15,16,30],randomst:30,rang:[0,5,6,9,15,16,19,20,24,26,28],rate:15,ratio:16,rbf:20,rdb:[1,17,23,27],rdbstorag:[17,19],reach:15,readlin:10,realiz:0,receiv:[6,19,24],recent:20,recommend:[0,5,15,17,18,19,20,24,25],record:[5,29],reduc:23,reduct:15,reduction_factor:15,refer:[0,9,10,15,16,19,20,24,29,30],refin:30,regard:24,regist:[9,22],regressor_nam:1,regressor_obj:1,rel:[9,16,30],relat:15,relationship:[16,21],releas:[9,15,16,19],relu:24,remain:[0,16],remot:1,render:21,repeat:[4,15],repeatedli:26,report:[6,9,15,18,20,28],repositori:[],repres:[15,19],reproduc:1,request:1,requir:[15,24],resourc:15,respect:[16,19],respons:30,rest:30,restrict:5,result:[1,10,15,16,18,20,23,25,28,30],resum:[1,10,23,27],retriev:22,return_x_i:1,rf_max_depth:[1,24],right:16,root:10,roughli:24,round:20,rule:[15,28],run:[0,1,9,15,16,18,19,25,29],run_every_step:9,rung:15,safe:19,same:[0,5,9,15,16,20,25,30],sampl:[0,5,9,16,19,20,30],sample_independ:[16,30],sample_rel:[16,30],sampler:[0,1,5,8,9,11,15,19,27],sano:[1,22],save:[1,10,20,23,27],scale:[16,20,25],schema:23,scienc:16,scikit:9,score:[6,9,15,20,28],script:[23,25,28],seamlessli:20,search:[1,9,15,16,26,30],search_spac:[16,30],second:[0,19],section:[29,30],see:[0,1,9,15,16,18,19,25,26,28,29,30],seed:[0,9,16],select:26,self:[0,19,30],send:[],sequenc:20,sequenti:[0,24],serial:5,serializ:[19,20,22],seriou:25,server:1,servic:3,session:26,sessionrunhook:9,set:[0,9,10,15,16,17,18,19,20,22,23,26,28,29],set_user_attr:[18,19,20,22],set_verbos:[0,10],setlevel:10,setup:[10,25],sever:[24,28],sgd:20,sgdclassifi:[6,15,20,28],sha:15,shape:19,share:25,shell:[23,26],shotaro:1,should:[15,19,20],should_prun:[6,15,20,28],shouldn:19,show:[0,4,10,15,19,21,23,30],show_progress_bar:19,shown:[0,6,10,23],sigma0:9,signal:[19,24],sigterm:[19,24],similarli:20,simpl:[9,15,29],simpler:28,simplest:0,simplic:30,simul:30,simulated_ann:30,simulatedannealingsampl:27,simultan:[1,16],sinc:[0,18,19,20],singl:[0,5,15,16,22,26],size:9,skip:19,skip_compatibility_check:17,sklearn:[0,1,6,15,20,22,24,28],sklearn_addtitional_arg:0,skopt:9,skopt_kwarg:9,skoptsampl:[9,30],slice:21,snippet:[16,21],softwar:[],solver:20,some:[15,30],sourc:[5,6,9,10,15,16,17,18,19,20,21],space:[1,9,15,16,27,30],speak:30,specif:[0,6,16,20,30],specifi:[0,4,6,9,15,16,19,20,23],sqlalchemi:[17,19,29],sqlite:[0,4,19,22,23,25,29],stack:[],stackoverflow:1,stage:28,standard:9,start:[10,18,20,23,26],startswith:10,startup:15,state:[0,18,19,20,26,29,30],statu:[0,18,28],stderr:10,step:[5,6,15,20,28],stepwis:9,stop:[0,10,15,19,28],storag:[0,1,4,5,6,8,19,22,23,25,29],storage_url:9,storageinternalerror:6,store:19,str:[5,22],strategi:16,strictli:30,string:[5,19,20],struct:[1,8],structur:16,studi:[1,6,8,9,10,11,15,16,17,18,20,21,23,25,27,28,30],study_id:[18,19,20],study_nam:[0,9,18,19,23,25,29],study_summari:22,studydirect:[9,18,19],studysummari:[18,19,22],style:[],subsampl:20,success:15,successivehalv:15,successivehalvingprun:15,suggest:[0,1,16,18,19,20,25,26,30],suggest_categor:[1,5,20,21,24],suggest_discrete_uniform:[5,16,20,24],suggest_int:[0,1,5,9,16,20,24],suggest_loguniform:[0,1,5,20,22,24,28],suggest_uniform:[0,5,6,9,15,16,19,20,21,23,24,25,26,29,30],suitabl:[16,19],summar:19,summari:9,support:[0,15,21,24,30],suppos:[5,6,15,17,22],suppress:[1,4],sure:16,svc:[0,20,22,24],svc_c:[0,22,24],svm:[0,1,20,22,24],svm_c:1,svr:1,svr_c:1,sys:10,system_attr:[0,18,19,26],tabl:23,tag:[9,15,16,19],take:[0,15,16],takeru:1,takuya:1,target:[0,9,15,16,22,28],task:[19,29,30],tell:6,temperatur:30,tensorflow:[9,28],tensorflowpruninghook:[9,28],term:3,termin:[0,19,24,25,28],terminolog:26,test:[1,5,9],test_object:0,test_siz:28,tfkeraspruningcallback:[9,28],than:[15,17],thank:30,thei:[0,5,25,28],them:[0,10,17,19,21,30],thi:[0,3,5,6,9,15,16,17,18,19,20,21,22,24,26,28,29,30],those:[0,30],three:[0,16,30],through:[],thu:[0,9,15,20],time:[15,17,19,20],timeout:[9,15,17,19,24],tool:3,top:15,toshihiko:1,total:23,tpe:[0,16,19],tpesampl:[0,9,15,16,19],traceback:4,trade:15,train:[1,9,20,28],train_and_evalu:9,train_data:9,train_i:28,train_input_fn:9,train_test_split:[1,28],train_x:28,trainer:[6,9],training_step:9,trainspec:9,transit:30,treat:0,tree:[16,20],trial:[1,6,8,9,10,11,15,16,17,18,19,21,23,24,25,26,27,29,30],trial_id:[18,20,26],trialprun:[0,6,15,18,19,20,28],trials_datafram:[0,19,29],trialstat:[0,18,26,28],trigger:9,tune:9,tupl:[9,19],turn:[17,19,28],tutori:1,two:[1,5,16,30],type:[0,5,16,20,30],typeerror:20,typic:15,uncaught:18,unexpect:19,uniform:[5,24,30],uniformdistribut:[5,26,30],uniformli:26,unimport:24,uniqu:[18,19,20,29],unit:[0,9],unnecessari:16,unpromis:[1,9,19,27],unrel:30,until:[0,9,15,19,24],updat:26,upgrad:23,upon:26,upper:[5,20],url:[4,17,19,29],use:[1,3,9,15,16,17,18,19,20,24,25,26,30],used:[0,9,15,16,19,20,26,30],useful:[19,20,24,26],user:[1,5,15,17,19,20,23,27],user_attr:[18,19,20,22,26],uses:[0,15,18,19,21],using:[0,3,9,15,16,23,25,30],usual:[0,26],util:29,val_acc:9,val_load:9,val_loss:9,valid:[9,28],valid_0:9,valid_i:28,valid_loss:9,valid_nam:9,valid_set:9,valid_x:28,validation_end:9,valu:[0,1,5,9,10,15,16,18,19,20,21,22,23,24,25,26,28,29,30],valueerror:0,variabl:[0,26],variou:19,verbos:[4,10],veri:0,versatil:[],version:[4,9,15,16,18,19,20,21],via:[0,9,20,22,29],vision:16,visitor:3,visual:[1,8],wai:[0,30],wait_timeout:17,want:[0,19],warmup:15,warn:[0,4,9,10,20],warn_independent_sampl:9,watch:9,web:23,websit:3,weight:[0,16],welcom:[],well:[24,29],were:0,what:[1,26],when:[1,5,6,9,15,19,20,24,25,26,30],where:[1,9,15,18,19,20],whether:[5,9,15,19,20,21],which:[0,9,15,16,19,20,22,23,26,29],whose:[16,21,26],width:30,within:26,without:[1,9,15,16,18,19,28],won:15,word:0,work:[0,3],wors:15,would:[0,26],wrap:[0,30],wrapper:9,write:[0,23,25],written:9,www:[3,25],x_test:[6,15,20],x_train:[0,1,6,15,20],x_val:1,x_valid:0,xgb:[9,28],xgboost:[9,28],xgboostpruningcallback:[9,28],y_pred:1,y_test:[6,15,20],y_train:[0,1,6,15,20],y_val:1,y_valid:0,yanas:1,you:[0,3,9,15,17,18,19,20,23,24,26,28,29,30],your:[1,17,19,21,24,30],zero:18},titles:["FAQ","Optuna: \u4e00\u4e2a\u8d85\u53c2\u6570\u4f18\u5316\u6846\u67b6","\u5b89\u88c5","Privacy Policy","Command Line Interface","Distributions","Exceptions","Hyperparameter Importance","API Reference","Integration","Logging","Multi-objective","Samplers","Study","Trial","Pruners","Samplers","Storages","Structs","Study","Trial","Visualization","User Attributes","Command-Line Interface","Advanced Configurations","Distributed Optimization","First Optimization","Tutorial","Pruning Unpromising Trials","Saving/Resuming Study with RDB Backend","User-Defined Sampler"],titleterms:{"\u4e00\u4e2a\u8d85\u53c2\u6570\u4f18\u5316\u6846\u67b6":1,"\u4e3b\u8981\u7279\u70b9":1,"\u57fa\u672c\u6982\u5ff5":1,"\u5b89\u88c5":2,"\u8d21\u732e":1,"function":[0,26],"import":7,"new":29,"return":0,Adding:22,activ:28,advanc:24,alter:0,analyt:3,api:8,argument:[0,24],attribut:22,backend:29,basic:[],branch:24,can:0,command:[4,23],commun:1,concept:[],configur:24,contribut:[],defin:[0,24,30],distribut:[5,25],dynam:0,evalu:0,exampl:[26,30],except:[0,6],experiment:29,faq:0,favorit:0,featur:[],first:26,framework:[],from:0,googl:3,gpu:0,handl:0,happen:0,have:0,histori:29,how:0,hyperparamet:7,implement:30,indic:1,instal:[],integr:[9,28],interfac:[4,23],kei:[],learn:0,librari:0,licens:1,line:[4,23],log:[0,10],loop:24,machin:0,messag:0,model:0,modul:28,multi:11,nan:0,note:24,number:24,object:[0,11,26],obtain:0,optim:[0,24,25,26],optuna:[0,1],overview:30,own:0,paramet:24,polici:3,privaci:3,prune:28,pruner:[15,28],quadrat:26,rdb:[0,29],refer:[1,8],remot:0,reproduc:0,result:0,resum:[0,29],sampler:[12,16,30],save:[0,29],search:0,server:0,simulatedannealingsampl:30,simultan:0,space:[0,24],storag:17,struct:18,studi:[0,13,19,22,24,26,29],suppress:0,tabl:1,test:0,train:0,trial:[0,14,20,22,28],tutori:27,two:0,unpromis:28,use:0,user:[22,30],visual:21,what:0,when:0,where:0,without:0,your:0}})