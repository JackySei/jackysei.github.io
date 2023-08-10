import{_ as n,o as s,c as a,a as t}from"./app.2f80defe.js";const p={},e=t(`<h1 id="webpack\u6784\u5EFAvue\u811A\u624B\u67B6" tabindex="-1"><a class="header-anchor" href="#webpack\u6784\u5EFAvue\u811A\u624B\u67B6" aria-hidden="true">#</a> webpack\u6784\u5EFAVue\u811A\u624B\u67B6</h1><h2 id="\u521B\u5EFA\u9879\u76EE-\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE-\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE\uFF0C\u5B89\u88C5\u4F9D\u8D56</h2><p>\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u5B89\u88C5\u4F9D\u8D56\u3002</p><p>\u57FA\u4E8E webpack 5 \u4ECE\u96F6\u642D\u5EFA Vue \u811A\u624B\u67B6\u4F7F\u7528\u7684\u4F9D\u8D56\u6709\uFF1Avue\u3001element-ui\u3001vue-router \u5F00\u53D1\u4F9D\u8D56\u6709\uFF1Awebpack\u3001webpack-cli\u3001vue-loader\u3001vue-template-compiler\u3001sass-loader\u3001sass\u3001css-loader\u3001style-loader\u3001babel-loader\u3001@babel/core\u3001@babel/preset-env</p><p>\u6709\u4E9B\u6682\u65F6\u7528\u4E0D\u5230\uFF0C\u4F46\u662F\u53EF\u4EE5\u5148\u4E00\u6B21\u6027\u628A\u4ED6\u4EEC\u5B89\u88C5\u8FDB\u6765\u3002</p><h2 id="\u521B\u5EFAindex-html" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAindex-html" aria-hidden="true">#</a> \u521B\u5EFAindex.html</h2><p>\u5199\u9875\u9762\u9700\u8981index.html\uFF0C\u5148\u521B\u5EFA\u4E00\u4E2A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bundle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2Aid=app\u7684div\u5C31\u662F\u7B49\u4F1A\u653Evue\u7EC4\u4EF6\u7684\u5730\u65B9\uFF0C\u8FD9\u91CC\u5148\u628A\u5B83\u5199\u5728\u8FD9\u3002</p><p>\u8FD9\u4E2Abundle.js\u662F\u6700\u540E\u6253\u5305\u751F\u6210\u7684js\uFF0C\u5728\u8FD9\u91CC\u5F15\u7528\uFF0C\u6211\u4EEC\u4E5F\u8FD8\u662F\u5148\u628A\u5B83\u5199\u5728\u8FD9\u3002</p><h2 id="\u521B\u5EFA\u5165\u53E3\u6587\u4EF6main-js" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5165\u53E3\u6587\u4EF6main-js" aria-hidden="true">#</a> \u521B\u5EFA\u5165\u53E3\u6587\u4EF6main.js</h2><p>\u6253\u5305\u9700\u8981\u6709\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6</p><p>\u521B\u5EFAmain.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u53D1\u73B0\u8FD9\u91CC\u7684App\u7EC4\u4EF6\u8FD8\u6CA1\u6709\u521B\u5EFA\u3002\u4ECE\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u51FA\u8FD9\u91CC\u7684App\u7EC4\u4EF6\u5C31\u662F\u6DFB\u52A0\u5230id\u4E3Aapp\u7684\u90A3\u4E2Adiv\u4E2D\u7684\u5185\u5BB9\u3002\u4E0B\u4E00\u6B65\u521B\u5EFA\u5B83\u3002</p><h2 id="\u521B\u5EFAapp-vue" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAapp-vue" aria-hidden="true">#</a> \u521B\u5EFAApp.vue</h2><p>\u968F\u4FBF\u5199\u4E00\u4E9B\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;div&gt;Hello World&lt;/div&gt;
        &lt;button&gt;BTN1&lt;/button&gt;
        &lt;button&gt;BTN2&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {

}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5230\u8FD9\u4E00\u6B65\u4EE3\u7801\u76F8\u5173\u7684\u5C31\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u63A5\u4E0B\u6765\u9700\u8981\u5BF9webpack\u8FDB\u884C\u4FEE\u6539\u3002</p><h2 id="webpack\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack\u914D\u7F6E" aria-hidden="true">#</a> Webpack\u914D\u7F6E</h2><p>\u521B\u5EFAwebpack.config.js\u6587\u4EF6\uFF0C\u8FDB\u884C\u914D\u7F6E\u7684\u7F16\u8F91\u3002</p><p>\u6CE8\u610F\uFF0C\u5230\u8FD9\u4E00\u6B65\u7684\u65F6\u5019\uFF0C\u4E3A\u4E86\u89C4\u8303\uFF0C\u5C06\u9879\u76EE\u76EE\u5F55\u683C\u5F0F\u4FEE\u6539\u6210\u4E0B\u56FE\u6240\u793A</p><p><img src="http://lyysx.top/public/images/1657682708563f821cf75ae36faff9699fa777037b83c.png" alt="\u622A\u56FE"></p><br><p>\u8FDB\u5165webpack.config.js\u914D\u7F6E\u6587\u4EF6\u4E2D\u7F16\u5199</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>VueLoaderPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;bundle.js&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token literal-property property">use</span><span class="token operator">:</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ca]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;scss-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.m?js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// {test:/\\.(png|jpg?g|gif|svg|webp)$/,use:{loader:&#39;file-loader&#39;,options:{esModule:false}}}</span>
            <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg?g|gif|svg|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;assets/resource&#39;</span><span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2Dentry\u4E3A\u5165\u53E3\u6587\u4EF6</p><p>output\u4E3A\u8F93\u51FA\u6587\u4EF6\uFF0C\u5728\u8FD9\u5176\u4E2D\u53EF\u4EE5\u8BBE\u7F6E\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\u79F0\uFF0C</p><p>\u5269\u4E0B\u7684\u5C31\u662F\u4E00\u4E9B\u6253\u5305\u89C4\u5219\u548C\u63D2\u4EF6\u7684\u8FD0\u7528\u3002</p><p>\u6BD4\u5982\u89E3\u6790.vue\u7ED3\u5C3E\u7684\u6587\u4EF6\u5C31\u9700\u8981\u7528\u5230\u521A\u521A\u5B89\u88C5\u7684vue-loader\uFF0C\u4E4B\u540E\u7684\u90A3\u4E9B\u4E5F\u662F\u540C\u7406\uFF0C\u8981\u8BA9webpack\u77E5\u9053\u89E3\u6790\u54EA\u79CD\u6587\u4EF6\u9700\u8981\u7528\u5230\u54EA\u4E9B\u4E1C\u897F\uFF0C\u5F53\u9700\u8981\u591A\u4E2Aloader\u65F6\uFF0C\u662F\u7528\u6570\u7EC4\u4FDD\u5B58\u7684\uFF0C\u89E3\u6790\u65F6\u662F\u4ECE\u53F3\u5230\u5DE6\uFF0C\u5C31\u6BD4\u5982\u4E0A\u9762\u5BF9sass\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF0C\u6253\u5305\u65F6\uFF0C\u9700\u8981\u7528\u5230\u4E09\u4E2Aloader\uFF0C\u4F46\u5B9E\u9645\u4E0Awebpack\u4F7F\u7528loader\u7684\u987A\u5E8F\u65F6scss-loader-&gt;css-loader-&gt;style-loader\u3002</p><p>webpack\u7684\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u5165\u542F\u52A8\u547D\u4EE4\u76F8\u5173\u7684\u914D\u7F6E\u4E86\u3002</p><h2 id="\u914D\u7F6E\u542F\u52A8\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u542F\u52A8\u547D\u4EE4" aria-hidden="true">#</a> \u914D\u7F6E\u542F\u52A8\u547D\u4EE4</h2><p>\u8FDB\u5165package.json\u4E2D</p><p>\u5C06\u8C03\u8BD5\u547D\u4EE4\u4FEE\u6539\u4E3A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --mode=development --watch&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --mode=production&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6CA1\u6709\u7684\u8BDD\u5C31\u65B0\u5EFA</p><p>\u5176\u4E2D--mode=development\u4EE3\u8868\u662F\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u6253\u5305\u7684\uFF0C\u914D\u7F6E\u6BD4\u8F83\u7B80\u5355\uFF0C\u662F\u4E00\u4E2A\u80FD\u8BA9\u4EE3\u7801\u672C\u5730\u8C03\u8BD5\u8FD0\u884C\u7684\u73AF\u5883\u3002\u6253\u5305\u901F\u5EA6\u8F83\u5FEB\uFF0C\u6BD5\u7ADF\u5F00\u53D1\u65F6\u8C01\u4E5F\u4E0D\u60F3\u56E0\u4E3A\u6253\u5305\u800C\u7B49\u592A\u4E45\u3002</p><p>\u800C\u53E6\u4E00\u4E2A\u662F\u751F\u4EA7\u6A21\u5F0F\uFF0C\u4E00\u65E6\u9879\u76EE\u53D1\u5E03\u8981\u53D1\u5E03\u5230\u751F\u4EA7\u73AF\u5883\u4E2D\u7ED9\u522B\u4EBA\u4F7F\u7528\u65F6\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u5BF9\u6253\u5305\u540E\u4EE3\u7801\u7684\u6027\u80FD\uFF0C\u4F53\u79EF\u90FD\u8981\u8FDB\u884C\u4F18\u5316\uFF0C\u800C\u76F8\u5BF9\u7684\u6253\u5305\u901F\u5EA6\u4E5F\u4F1A\u6BD4\u5F00\u53D1\u6A21\u5F0F\u6162\uFF0C\u6BD5\u7ADF\u591A\u505A\u4E86\u5F88\u591A\u4E8B\u60C5</p><p>watch\u662F\u5BF9\u9879\u76EE\u6587\u4EF6\u7684\u76D1\u542C\uFF0C\u76D1\u542C\u5230\u6587\u4EF6\u4FEE\u6539\u4E4B\u540E\uFF0C\u4F1A\u91CD\u65B0\u7F16\u8BD1\u6253\u5305\u3002</p>`,39),o=[e];function l(c,i){return s(),a("div",null,o)}var r=n(p,[["render",l],["__file","WebpacktoVue.html.vue"]]);export{r as default};
