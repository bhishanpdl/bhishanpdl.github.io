document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-31007ea0d3bd9f80540adfbc55afc7bd.css">')
document.write('<div id=\"gist99613731\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-mnist_optuna_imports_and_loaders-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>from<\/span> __future__ <span class=pl-k>import<\/span> <span class=pl-s1>print_function<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>torch<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>torch<\/span>.<span class=pl-s1>nn<\/span> <span class=pl-k>as<\/span> <span class=pl-s1>nn<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>torch<\/span>.<span class=pl-s1>nn<\/span>.<span class=pl-s1>functional<\/span> <span class=pl-k>as<\/span> <span class=pl-v>F<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>torch<\/span>.<span class=pl-s1>optim<\/span> <span class=pl-k>as<\/span> <span class=pl-s1>optim<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>from<\/span> <span class=pl-s1>torchvision<\/span> <span class=pl-k>import<\/span> <span class=pl-s1>datasets<\/span>, <span class=pl-s1>transforms<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>def<\/span> <span class=pl-en>get_mnist_loaders<\/span>(<span class=pl-s1>train_batch_size<\/span>, <span class=pl-s1>test_batch_size<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s>&quot;&quot;&quot;Get MNIST data loaders&quot;&quot;&quot;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>train_loader<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>torch<\/span>.<span class=pl-s1>utils<\/span>.<span class=pl-s1>data<\/span>.<span class=pl-v>DataLoader<\/span>(<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>datasets<\/span>.<span class=pl-v>MNIST<\/span>(<span class=pl-s>&#39;../data&#39;<\/span>, <span class=pl-s1>train<\/span><span class=pl-c1>=<\/span><span class=pl-c1>True<\/span>, <span class=pl-s1>download<\/span><span class=pl-c1>=<\/span><span class=pl-c1>True<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">                       <span class=pl-s1>transform<\/span><span class=pl-c1>=<\/span><span class=pl-s1>transforms<\/span>.<span class=pl-v>Compose<\/span>([<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">                           <span class=pl-s1>transforms<\/span>.<span class=pl-v>ToTensor<\/span>(),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">                           <span class=pl-s1>transforms<\/span>.<span class=pl-v>Normalize<\/span>((<span class=pl-c1>0.1307<\/span>,), (<span class=pl-c1>0.3081<\/span>,))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">                       ])),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>batch_size<\/span><span class=pl-c1>=<\/span><span class=pl-s1>train_batch_size<\/span>, <span class=pl-s1>shuffle<\/span><span class=pl-c1>=<\/span><span class=pl-c1>True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>test_loader<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>torch<\/span>.<span class=pl-s1>utils<\/span>.<span class=pl-s1>data<\/span>.<span class=pl-v>DataLoader<\/span>(<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>datasets<\/span>.<span class=pl-v>MNIST<\/span>(<span class=pl-s>&#39;../data&#39;<\/span>, <span class=pl-s1>train<\/span><span class=pl-c1>=<\/span><span class=pl-c1>False<\/span>, <span class=pl-s1>transform<\/span><span class=pl-c1>=<\/span><span class=pl-s1>transforms<\/span>.<span class=pl-v>Compose<\/span>([<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">                           <span class=pl-s1>transforms<\/span>.<span class=pl-v>ToTensor<\/span>(),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">                           <span class=pl-s1>transforms<\/span>.<span class=pl-v>Normalize<\/span>((<span class=pl-c1>0.1307<\/span>,), (<span class=pl-c1>0.3081<\/span>,))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">                       ])),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>batch_size<\/span><span class=pl-c1>=<\/span><span class=pl-s1>test_batch_size<\/span>, <span class=pl-s1>shuffle<\/span><span class=pl-c1>=<\/span><span class=pl-c1>True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-mnist_optuna_imports_and_loaders-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>return<\/span> <span class=pl-s1>train_loader<\/span>, <span class=pl-s1>test_loader<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/perlitz/04231fb6eb0cfe3b418c60d494dfab17/raw/ce5dbdadf0af4c24c4593930ef8a1b5534b1f150/mnist_optuna_imports_and_loaders.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/perlitz/04231fb6eb0cfe3b418c60d494dfab17#file-mnist_optuna_imports_and_loaders-py\">mnist_optuna_imports_and_loaders.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
