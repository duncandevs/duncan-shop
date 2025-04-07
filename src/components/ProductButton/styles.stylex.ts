import * as stylex from '@stylexjs/stylex';

export const variants = stylex.create({
    base: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 74,
        width: 310,
        borderRadius: 36,
        color: 'white',
        backgroundColor: 'black',
    },
    primary: {
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'black',
        ':hover': {
            backgroundColor: 'black',
            color:'white'   
        }
    },
    secondary: {
        color: 'black',
        border: 'none',
        ':hover': {
            opacity: 0.5
        }
    }
});

export const themes = stylex.create({
    foam: {
        backgroundColor: 'var(--color-pastel-yellow)',
    },
    sea: {
        backgroundColor: 'var(--color-pastel-blue)',
    },
    fluffy: {
        backgroundColor: 'var(--color-pastel-red)',
    }
});

export const styles = stylex.create({
    divider: {
        flex: 1,
        maxWidth: 100,
        height: '2px',
        backgroundColor: 'black',
        margin: '0 8px',
        alignSelf: 'center'
    }
})

export default {
    variants,
    themes,
    styles
}