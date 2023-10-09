import spacy
from gensim.summarization import summarize

def extract_text_from_transcript(transcript_file):
    with open(transcript_file, "r", encoding="utf-8") as file:
        transcript_text = file.read()
    return transcript_text

def summarize_transcript(transcript_text, summary_length="auto", language="en"):
    nlp = spacy.load(language)
    doc = nlp(transcript_text)

    if summary_length == "auto":
        # Default to 20% of the original text length
        summary_ratio = 0.2
    else:
        # Calculate the summary ratio based on the specified length
        total_words = len(list(doc))
        summary_ratio = summary_length / total_words

    sentences = [sent.text for sent in doc.sents]
    transcript_text = " ".join(sentences)

    summary = summarize(transcript_text, ratio=summary_ratio)
    return summary

if __name__ == "__main__":
    print("Video Transcript Summarization")

    # Interactive CLI input
    transcript_file = input("Enter the path to the transcript file: ")
    language = input("Enter the language (e.g., 'en' for English): ")
    summary_length = input("Enter the desired summary length (in sentences or words, or 'auto' for default): ")

    transcript_text = extract_text_from_transcript(transcript_file)
    summary = summarize_transcript(transcript_text, summary_length, language)

    # Print the summary
    print("\nVideo Transcript Summary:")
    print(summary)
