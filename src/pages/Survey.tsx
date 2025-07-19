import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { questions, extendedQuestions } from "@/data/survey";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Survey = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [isExtended, setIsExtended] = useState(false);
  const [showExtendedOption, setShowExtendedOption] = useState(false);
  
  const currentQuestions = isExtended ? [...questions, ...extendedQuestions] : questions;
  const totalQuestions = currentQuestions.length;
  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (optionId: string) => {
    const questionId = currentQuestions[currentQuestion].id;
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (!isExtended && currentQuestion === questions.length - 1) {
      setShowExtendedOption(true);
      return;
    }

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Navigate to results with answers
      const queryString = new URLSearchParams();
      Object.entries(answers).forEach(([questionId, answer]) => {
        queryString.append(questionId, answer);
      });
      navigate(`/results?${queryString.toString()}`);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleExtendedChoice = (choice: boolean) => {
    if (choice) {
      setIsExtended(true);
      setCurrentQuestion(questions.length);
    } else {
      // Go to results with current answers
      const queryString = new URLSearchParams();
      Object.entries(answers).forEach(([questionId, answer]) => {
        queryString.append(questionId, answer);
      });
      navigate(`/results?${queryString.toString()}`);
    }
    setShowExtendedOption(false);
  };

  const currentQuestionData = currentQuestions[currentQuestion];
  const selectedAnswer = answers[currentQuestionData?.id];

  if (showExtendedOption) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center animate-scale-in">
              <h2 className="text-2xl font-bold mb-6">
                Great job completing the basic survey!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Want to answer 10 more questions for even better tool suggestions?
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => handleExtendedChoice(true)}
                  size="lg"
                  className="px-8"
                >
                  Yes, Continue
                </Button>
                <Button 
                  variant="secondary"
                  onClick={() => handleExtendedChoice(false)}
                  size="lg"
                  className="px-8"
                >
                  No, Show Results
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Privacy Tools Survey</h1>
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-8 mb-6 animate-slide-in-right">
            <h2 className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed">
              {currentQuestionData.question}
            </h2>

            <div className="space-y-4">
              {currentQuestionData.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 ${
                    selectedAnswer === option.id
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-border bg-card hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                      selectedAnswer === option.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}>
                      {selectedAnswer === option.id && (
                        <div className="w-full h-full rounded-full bg-primary-foreground scale-50" />
                      )}
                    </div>
                    <span className="text-base">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="secondary"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="flex items-center"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="flex items-center"
            >
              {currentQuestion === totalQuestions - 1 ? "Show Results" : "Next"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;