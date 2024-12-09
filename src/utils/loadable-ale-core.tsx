import loadable, {
  DefaultComponent,
  LoadableClassComponent,
  LoadableComponent,
  Options,
  OptionsWithoutResolver,
  OptionsWithResolver
} from '@loadable/component'

function LoadedAleCore<Props, Module = DefaultComponent<Props>>(
  loadFn: (props: Props) => Promise<Module>,
  options: OptionsWithResolver<Props, Module>
): LoadableComponent<Props>

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function LoadedAleCore<Component extends React.ComponentClass<any>>(
  loadFn: (props: React.ComponentProps<Component>) => Promise<Component | { default: Component }>,
  options?: Options<React.ComponentProps<Component>, Component>
): LoadableClassComponent<Component>

function LoadedAleCore<Props>(
  loadFn: (props: Props) => Promise<DefaultComponent<Props>>,
  options?: OptionsWithoutResolver<Props>
): LoadableComponent<Props>

function LoadedAleCore(func: Parameters<typeof LoadedAleCore>[0], options: Parameters<typeof LoadedAleCore>[1]) {
  return loadable(func, {
    ...options,
    fallback: <>...Loading</>
  })
}

export default LoadedAleCore
