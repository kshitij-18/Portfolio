import { Separator } from '@/components/ui/separator'

type DividerProps = {
    text: string
};

const Divider = (props: DividerProps) => {
    return (
        <div className="flex px-10 items-center">
            <div className="w-1/3">
                <Separator />
            </div>
            <p className="px-4 text-gray-600 dark:text-white text-lg font-semibold">{props.text}</p>
            <div className="w-2/3">
                <Separator />
            </div>
        </div>
    )
}

export default Divider