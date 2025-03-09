import xml.etree.ElementTree as ET
import re

def widen_svg(input_file, output_file, new_width):
    """
    Widens an SVG image by extending the background color.
    
    Args:
        input_file (str): Path to the input SVG file
        output_file (str): Path to save the modified SVG
        new_width (int): New width for the SVG
    """
    # Parse the SVG file
    tree = ET.parse(input_file)
    root = tree.getroot()
    
    # Get current dimensions
    width = int(root.get('width'))
    height = int(root.get('height'))
    viewBox = root.get('viewBox')
    
    if viewBox:
        # Parse viewBox values
        vb_values = [float(x) for x in viewBox.split()]
        vb_width = vb_values[2]
    else:
        vb_width = width
    
    # Calculate the scaling factor
    scale_factor = new_width / width
    
    # Update width attribute
    root.set('width', str(new_width))
    
    # Update viewBox if it exists
    if viewBox:
        new_vb_width = vb_width * scale_factor
        new_viewBox = f"0 0 {new_vb_width} {vb_values[3]}"
        root.set('viewBox', new_viewBox)
    
    # Find the background rectangle (usually the first rect element)
    background_rect = None
    for elem in root.iter('{http://www.w3.org/2000/svg}rect'):
        if elem.get('width') and elem.get('height'):
            background_rect = elem
            break
    
    # If we found a background rectangle, update its width
    if background_rect:
        background_rect.set('width', str(new_width))
        if viewBox:
            background_rect.set('width', str(new_vb_width))
    
    # Write the modified SVG to the output file
    tree.write(output_file)
    
    print(f"SVG widened from {width} to {new_width} pixels")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 3:
        print("Usage: python test.py input_file.svg output_file.svg new_width")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    new_width = int(sys.argv[3])
    
    widen_svg(input_file, output_file, new_width)
