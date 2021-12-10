import { ConfigProvider } from 'vant';
import { defineComponent, KeepAlive, Suspense } from 'vue';
import { RouterView } from 'vue-router';
import './App.css';
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <ConfigProvider theme-vars={{blue: "#6476FF",navBarArrowSize:"1.4rem"}}>
        <Suspense onFallback={()=><div> Loading...</div>}>
            <RouterView>
                {        
                // @ts-ignore
                  ({ Component, route }) => {
                    const { meta } = route;
                    const isKeepAlive = meta && meta.keepAlive;
                    return (
                      <>
                        <KeepAlive>
                            { isKeepAlive ? <Component is={meta.usePathKey ? route.path : undefined} />: null }
                        </KeepAlive>  
                        { !isKeepAlive ? <Component />: null }
                      </>
                    )  
                  }
                }
            
            </RouterView>
        </Suspense>  
      </ConfigProvider>   
    )
  }
})