import * as React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = React.useState(initial)

    const handlePlusCounter = () => {
        setCounter(counter + 1)
    }

    const handleSubCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <Box component="span" sx={{ p: 2, backgroundColor: '#EDEEFF' }}>
                <IconButton onClick={handlePlusCounter} disabled={counter >= stock ? true : false}>
                    <AddIcon />
                </IconButton>
                {counter}
                <IconButton onClick={handleSubCounter} disabled={counter > 0 ? false : true}>
                    <RemoveIcon />
                </IconButton>
            </Box>
            <Button variant="outlined" onClick={e => counter!==0 && onAdd(counter)}>Add to Cart</Button>
        </>
    )
}

export default ItemCount