from bing_image_downloader import downloader

downloader.download("lacazette face", limit=10,  output_dir='dataset', adult_filter_off=True, force_replace=False, timeout=60, verbose=True)
downloader.download("ronaldo face", limit=10,  output_dir='dataset', adult_filter_off=True, force_replace=False, timeout=60, verbose=True)
