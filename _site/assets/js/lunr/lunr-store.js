var store = [{
        "title": "Cufft4dm",
        "excerpt":"CUDA做n维快速傅里叶变换(FFT) 众所周知，CUDA提供了快速傅里叶变换（FFT）的API，称作cufft库，但是cufft中只给出了至多三维的FFT，本文以四维FFT为例，记录如何使用CUDA做N维FFT。 高维DFT 二维离散FFT公式： \\[F(u,v)=\\sum_{x=0}^{M-1}\\sum_{y=0}^{N-1}f(x,y)e^{-j2\\pi(\\frac{ux}{M}+\\frac{vy}{N})}\\] 从二维的离散FFT公式可以看出，做二维的FFT时是先在x方向做一次一维FFT，再在y方向做一次一维FFT。同样的，可以推导出n维DFT即分别在各个方向做n次一维DFT。 函数cufftPlanMany() 首先看到函数cufftPlanMany()： cufftResult cufftPlanMany( cufftHandle *plan, int rank, int *n, int *inembed, int istride, int idist, int *onembed, int ostride, int odist, cufftType type, int batch); 其中，rank表示每个batch的维度，*n则表示rank每个维度的划分，储存在一个长度为rank的一维数组中。例如rank为2，划分为$N\\times N$，那么*n就是一个数组： int *n={N,N}; 而其他的变量含义如下： The istride and ostride parameters denote the distance between two successive input and...","categories": [],
        "tags": [],
        "url": "/cufft4dm/",
        "teaser": null
      }]
